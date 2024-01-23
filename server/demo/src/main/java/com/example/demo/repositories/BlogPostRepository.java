package com.example.demo.repositories;


import com.example.demo.models.BlogPost;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogPostRepository extends JpaRepository<BlogPost, Long> {
    // Inga ytterligare metoder krävs för detta exempel
}

