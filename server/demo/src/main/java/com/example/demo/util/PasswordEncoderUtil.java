package com.example.demo.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class PasswordEncoderUtil {
    private BCryptPasswordEncoder passwordEncoder;

    public PasswordEncoderUtil() {
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    // to create a hashed password, with some salt
    public String encodePassword(String password, String salt) {
        return passwordEncoder.encode(password + salt);
    }

    // verifying the password, and comparing it with a raw password, and see if they match
    public boolean verifyPassword(String rawPassword, String hashedPassword, String salt) {
        return passwordEncoder.matches(rawPassword + salt, hashedPassword);
    }
}