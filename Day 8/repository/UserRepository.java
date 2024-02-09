package com.example.project.aparna.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.project.aparna.model.User; 

public interface UserRepository extends JpaRepository<User,String>{
    Optional<User> findByEmail(String email);
}
