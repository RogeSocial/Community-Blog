package com.example.demo.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

public class JwtVerifyFilter extends OncePerRequestFilter {

    private UserDetailsService userService;

    public JwtVerifyFilter(UserDetailsService userService) {
        this.userService = userService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        var authHeader = request.getHeader("Authorization");
        if (authHeader == null || authHeader.isBlank()) {
            filterChain.doFilter(request, response);
            return;
        }

        try {
            var algorithm = Algorithm.HMAC256("super-secret-key");
            // generate token
            JWTVerifier verifier = JWT.require(algorithm)
                    .build();
            // remove the "Bearer" part of the header, since the verifier compares the raw
            // hash data straight up
            authHeader = authHeader.replace("Bearer ", "");
            // verify the token
            var jwt = verifier.verify(authHeader);
            // get user based on name
            var account = this.userService.loadUserByUsername(jwt.getClaim("name").asString());
            var auth = new UsernamePasswordAuthenticationToken(account, account.getPassword(),
                    account.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(auth);

            filterChain.doFilter(request, response);
        } catch (JWTVerificationException exception) {
            exception.printStackTrace();
            throw new IllegalStateException("Failed to authenticate");
        }
    }
}