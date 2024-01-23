package com.example.demo.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {

                System.out.println("CORS Configuration Applied!");

                // Configuration for "/api/blog"
                registry.addMapping("/api/blog")
                        .allowedOrigins("http://localhost:5173") // Update to the correct port for your frontend
                        .allowedMethods("GET", "POST", "PUT", "DELETE")
                        .allowCredentials(true);

                // Configuration for "/account/**"
                registry.addMapping("/account/**")
                        .allowedOrigins("http://localhost:5173") // Allow requests from this origin
                        .allowedMethods("GET", "POST", "PUT", "DELETE");
            }
        };
    }
}