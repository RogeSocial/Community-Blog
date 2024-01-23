package com.example.demo.controllers;

// src/main/java/com/example/blog/controllers/BlogController.java

import com.example.demo.models.BlogPost;
import com.example.demo.repositories.BlogPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/blog")
@CrossOrigin(origins = "http://localhost:8080")
public class BlogController {

    @Autowired
    private BlogPostRepository blogPostRepository;

    @GetMapping
    public List<BlogPost> getAllBlogPosts() {
        return blogPostRepository.findAll();
    }

    @PostMapping
    public BlogPost createBlogPost(@RequestBody BlogPost blogPost) {
        blogPost.setDate(new Date());
        String titleFromFrontend = blogPost.getTitle();
        String contentFromFrontend = blogPost.getContent();

        // Gör något med titeln och brödtexten om det behövs
        // Till exempel, om du vill logga dem:
        System.out.println("Received Title: " + titleFromFrontend);
        System.out.println("Received Content: " + contentFromFrontend);

        // Spara bloggposten i databasen
        return blogPostRepository.save(blogPost);
    }
}
