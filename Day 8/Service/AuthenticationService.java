package com.example.project.aparna.Service;

//import com.example.project.aparna.dto.request.BookingRequest;
import com.example.project.aparna.dto.request.LoginRequest;
import com.example.project.aparna.dto.request.RegisterRequest;
//import com.example.project.aparna.dto.response.BookingResponse;
import com.example.project.aparna.dto.response.LoginResponse;
import com.example.project.aparna.dto.response.RegisterResponse;


public interface AuthenticationService {

     RegisterResponse register(RegisterRequest request) ;
     LoginResponse login(LoginRequest request);
     //BookingResponse book(BookingRequest request);

    
}