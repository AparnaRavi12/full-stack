// package com.example.project.aparna.controller;

// import static com.example.project.aparna.Utils.myconstant.LIST;
// import static com.example.project.aparna.Utils.myconstant.USERS;

// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;
// import com.example.project.aparna.Service.PaymentService;
// import com.example.project.aparna.dto.response.BasicResponse;
// import com.example.project.aparna.dto.response.PaymentResponse;
// import lombok.RequiredArgsConstructor;

// @RestController
// @RequestMapping(USERS)
// @RequiredArgsConstructor
// public class PaymentController {
//     private final PaymentService PaymentService;
//     @GetMapping(LIST)
//     public ResponseEntity<BasicResponse<PaymentResponse>> create(){
//         BasicResponse<PaymentResponse> response=new BasicResponse<>();
//         try
//         {
//             response=PaymentService.getAllPayment();
//             return new ResponseEntity<>(response,HttpStatus.OK);
//         }
//         catch(Exception e)
//         {
//             response.setMessage("Something went wrong!");
//             return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
//         }
//     }
// }

