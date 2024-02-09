package com.example.project.aparna.Service;

import com.example.project.aparna.dto.response.BasicResponse;
import com.example.project.aparna.dto.response.UserResponse;

public interface UserService {
     BasicResponse<UserResponse> getAllUser();
}