package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;
import com.example.demo.repositories.AccountRepository;
import com.example.demo.util.JwtTokenUtil;
import com.example.demo.util.PasswordEncoderUtil;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.example.demo.dtos.CreateAccountDto;
import com.example.demo.models.Account;
import java.util.List;

@Service
public class AccountService implements UserDetailsService {

    private AccountRepository accountRepository;
    private PasswordEncoderUtil passwordEncoder;

    @Autowired
    public AccountService(AccountRepository accountRepository, PasswordEncoderUtil passwordEncoderUtil) {
        this.accountRepository = accountRepository;
        this.passwordEncoder = passwordEncoderUtil;
    }

    public Account createAccount(CreateAccountDto accountDto) {
        String salt = BCrypt.gensalt();
        var account = new Account(
                accountDto.getName(),
                accountDto.getEmail(),
                passwordEncoder.encodePassword(accountDto.getPassword(), salt),
                salt,
                accountDto.getAuthority());

        return this.accountRepository.save(account);
    }

    public String login(String email, String password) {
        try {
            Account account = accountRepository.findByEmail(email);
            if (account != null) {
                // Log the username here to check what name is fetched from the account
                System.out.println("Username retrieved: " + account.getUsername());
    
                if (passwordEncoder.verifyPassword(password, account.getPassword(), account.getSalt())) {
                    // return a token with id, authority, and name in the payload
                    return JwtTokenUtil.createToken(
                            String.valueOf(account.getId()),
                            account.getAuthority(),
                            account.getEmail(),
                            account.getName());
                } else {
                    return "wrong password";
                }
            } else {
                return "email/user not found";
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "error when getting email";
        }
    }
    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    public String verifyToken(String token) {
        boolean isValid = JwtTokenUtil.verifyToken(token);
        if (isValid) {
            String id = JwtTokenUtil.getSubjectFromToken(token);
            Account account = accountRepository.findById(Integer.parseInt(id));
            return "Token is valid name: " + account.getName() + "  id: " + account.getId();
        } else {
            return "invalid token";
        }
    }

    // has to do with spring security, basically authentication and authorization
    @Override
    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
        try {
            Account account = this.accountRepository.findByName(name)
                    .orElseThrow(() -> new UsernameNotFoundException("Could not find user '" + name + "'."));

            return org.springframework.security.core.userdetails.User.builder()
                    .username(account.getUsername())
                    .password(account.getPassword())
                    .roles(account.getAuthority())
                    .build();
        } catch (Exception e) {
            throw new UsernameNotFoundException("Error occurred while loading user by username: " + name, e);
        }
    }

    public Account getUserByToken(String token) {
        // gets id from token
        String subject = JwtTokenUtil.getSubjectFromToken(token);
        return accountRepository.findById(Integer.parseInt(subject));
    }
}
