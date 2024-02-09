package com.example.project.aparna.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.project.aparna.Service.UserService;
import com.example.project.aparna.dto.response.BasicResponse;
import com.example.project.aparna.dto.response.UserResponse;
import static com.example.project.aparna.Utils.myconstant.LIST;
import static com.example.project.aparna.Utils.myconstant.USERS;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping(USERS)
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    @GetMapping(LIST)
    public ResponseEntity<BasicResponse<UserResponse>> create(){
        BasicResponse<UserResponse> response=new BasicResponse<>();
        try
        {
            response=userService.getAllUser();
            return new ResponseEntity<>(response,HttpStatus.OK);
        }
        catch(Exception e)
        {
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
        }
    }
}