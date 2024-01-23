package com.example.demo.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collections;
import java.util.Collection;

@Getter
@Entity
@Data
@NoArgsConstructor
public class Account implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;

    public Account(String name, String email, String password, String salt, String authority) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.salt = salt;
        this.authority = authority;
    }

    @Column(nullable = false)
    public String name;

    @Column(nullable = false)
    public String email;

    @Column(nullable = false)
    public String password;

    @Column(nullable = false)
    public String salt;

    @Column(nullable = false)
    public String authority;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(new SimpleGrantedAuthority(this.authority));
    }

    @Override
    public String getUsername() {
        return this.name;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}