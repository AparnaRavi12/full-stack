package com.example.project.aparna.Service.Implements;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import com.example.project.aparna.model.User;
import com.example.project.aparna.repository.UserRepository;
import com.example.project.aparna.Service.UserService;
import com.example.project.aparna.dto.response.BasicResponse;
import com.example.project.aparna.dto.response.UserResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepo;
    @Override
    public BasicResponse <UserResponse> getAllUser(){
        List<User> users=userRepo.findAll();
        List<UserResponse> userResponses=users.stream().map(user-> UserResponse.builder()
        .id(user.getId())
        .username(user.getUsername())
        .role(user.getRole())
        .build()).collect(Collectors.toList());
        return BasicResponse.<UserResponse>builder().message("success!").data(userResponses).build();   
    }
}