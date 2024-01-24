package com.example.demo.controllers;

// src/main/java/com/example/blog/controllers/BlogController.java

import com.example.demo.models.BlogPost;
import com.example.demo.repositories.BlogPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

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
    @GetMapping("/{postId}")
    public ResponseEntity<BlogPost> getBlogPostById(@PathVariable Long postId) {
        // Retrieve the blog post by ID from the repository
        Optional<BlogPost> blogPostOptional = blogPostRepository.findById(postId);

        // Check if the blog post exists
        if (blogPostOptional.isPresent()) {
            // If found, return the blog post
            return ResponseEntity.ok(blogPostOptional.get());
        } else {
            // If not found, return a 404 response
            return ResponseEntity.notFound().build();
        }
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
