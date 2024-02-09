package com.example.project.aparna.Service.Implements;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import com.example.project.aparna.Service.AuthenticationService;
import com.example.project.aparna.Utils.JwtUtil;
//import com.example.project.aparna.dto.request.BookingRequest;
import com.example.project.aparna.dto.request.LoginRequest;
import com.example.project.aparna.dto.request.RegisterRequest;
//import com.example.project.aparna.dto.response.BookingResponse;
import com.example.project.aparna.dto.response.LoginResponse;
import com.example.project.aparna.dto.response.RegisterResponse;
import com.example.project.aparna.enumaretor.Role;
//import com.example.project.aparna.model.Booking;
import com.example.project.aparna.model.User;
import com.example.project.aparna.repository.UserRepository;
//import com.example.project.aparna.repository.bookingRepository;

import lombok.RequiredArgsConstructor;
import lombok.var;


@Service
@RequiredArgsConstructor
// @SuppressWarnings("null")
public class AuthenticationServiceImpl implements AuthenticationService {
    private final UserRepository userRepository;
   // private final bookingRepository bookingRepository;
    private final JwtUtil jwtutil;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;

    @Override
    public RegisterResponse register(RegisterRequest request) {
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        if (isUserExists.isPresent()) {
            return RegisterResponse.builder()
                .message("User with email id " + request.getEmail() + " already exists")
                .build();
        }
        var user = User.builder()
            .name(request.getName())
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .role(Role.USER)
            .build();
        userRepository.save(user);
        return RegisterResponse.builder()
            .message("User created successfully")
            .build();
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        // TODO Auto-generated method stub
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user=userRepository.findByEmail(request.getEmail()).orElseThrow();
        String token=jwtutil.generateToken(user);
        return LoginResponse.builder()
        .message("User logged in Suuccessfully")
        .token(token)
        .build();
        
    }

    
   /* @Override
public BookingResponse book(BookingRequest request) {
    Optional<Booking>isBookingExists = bookingRepository.findByEmail(request.getEmail());
     if(isBookingExists.isPresent()){
        return BookingResponse.builder().message("User with mail id "+request.getEmail()+" is already exists!").build();
     }var booking=Booking.builder()
                .id(request.getId())
                .name(request.getName())
                .email(request.getEmail())
                .build();
        bookingRepository.save(booking);
        return BookingResponse.builder().message("Booked successfully!").build();
}
*/
}