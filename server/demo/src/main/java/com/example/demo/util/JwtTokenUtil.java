package com.example.demo.util;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;

import java.util.Date;

public class JwtTokenUtil {
    // needed for creating hash in the token
    private static final String secret = "super-secret-key";

    // creating the token, payload will contain name and id
    public static String createToken(String subject, String authority, String email, String name) {
        Algorithm algorithm = Algorithm.HMAC256(secret);
        return JWT.create()
                .withSubject(subject)
                .withClaim("authorities", authority)
                .withClaim("email", email)
                .withClaim("name", name)
                .withExpiresAt(new Date(System.currentTimeMillis() + 3600000))
                .sign(algorithm);
    }

    // to validate the token
    public static boolean verifyToken(String token) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(secret);
            JWTVerifier verifier = JWT.require(algorithm)
                    .build();
            verifier.verify(token);
            return true;
        } catch (JWTVerificationException e) {
            return false;
        }
    }

    // returns the subject(id) from token
    public static String getSubjectFromToken(String token) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(secret);
            JWTVerifier verifier = JWT.require(algorithm).build();

            DecodedJWT jwt = verifier.verify(token);
            return jwt.getSubject();
        } catch (JWTVerificationException e) {
            // Handle JWT verification exception
            System.out.println("Failed to verify token: " + e.getMessage());
            return null;
        } catch (Exception e) {
            // Handle other exceptions
            System.out.println("An error occurred: " + e.getMessage());
            return null;
        }
    }
}
