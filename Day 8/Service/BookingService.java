package com.example.project.aparna.Service;

import com.example.project.aparna.dto.response.BasicResponse;
import com.example.project.aparna.dto.response.BookingResponse;

public interface BookingService {
    
    BasicResponse<BookingResponse> getAllBooking();
}
