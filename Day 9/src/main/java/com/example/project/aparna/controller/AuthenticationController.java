package com.example.project.aparna.controller;

import com.example.project.aparna.Service.AuthenticationService;
//import com.example.project.aparna.dto.request.BookingRequest;
import com.example.project.aparna.dto.request.LoginRequest;
import com.example.project.aparna.dto.request.RegisterRequest;
//import com.example.project.aparna.dto.response.BookingResponse;
import com.example.project.aparna.dto.response.LoginResponse;
import com.example.project.aparna.dto.response.RegisterResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
//import static com.example.project.aparna.Utils.myconstant.BOOKING;
import static com.example.project.aparna.Utils.myconstant.LOGIN;
import static com.example.project.aparna.Utils.myconstant.REGISTER;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping(REGISTER)
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request) {
        RegisterResponse response = new RegisterResponse();
        try {
            response = authenticationService.register(request);
            return new ResponseEntity<>(response, ACCEPTED);
        } catch(Exception e) {
            response.setMessage("Something went Wrong!");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }

    @PostMapping(LOGIN)
    public ResponseEntity <LoginResponse> login(@RequestBody LoginRequest request){
        LoginResponse response=new LoginResponse();
        try{
            response=authenticationService.login(request);
            return new ResponseEntity<>(response,ACCEPTED);
        }catch(Exception e){
            System.out.println(e);
            response.setMessage("Something went wrong!!!!!!!!!!!");
            response.setToken("");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
        
        
    }
    // @PostMapping(BOOKING)
    // public ResponseEntity<BookingResponse> book(@RequestBody BookingRequest request){
    //     BookingResponse response = new BookingResponse();
    //     try {
    //         response = authenticationService.book(request);
    //         return new ResponseEntity<>(response,ACCEPTED);
            
    //     } catch (Exception e) {
    //         response.setMessage("something went wrong");
    //         return new ResponseEntity<>(response,EXPECTATION_FAILED);

    //     }
    // }
}
