package com.example.project.aparna.Service;

import com.example.project.aparna.dto.response.BasicResponse;
//import com.example.project.aparna.dto.response.BookingResponse;
import com.example.project.aparna.dto.response.PaymentResponse;

public interface PaymentService {
    
    BasicResponse<PaymentResponse> getAllPayment();
}
