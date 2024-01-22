package com.example.demo.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateAccountDto {
    private String name;
    private String email;
    private String password;
    private String authority;
}
