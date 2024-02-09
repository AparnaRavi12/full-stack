package com.example.project.aparna.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.project.aparna.model.Booking;

public interface bookingRepository extends JpaRepository<Booking,String>{
    Optional<Booking> findByEmail(String email);

}
