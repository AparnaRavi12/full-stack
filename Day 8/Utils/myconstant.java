package com.example.project.aparna.Utils;

import java.util.*;
import static org.springframework.http.HttpHeaders.*;
import static org.springframework.http.HttpMethod.*;
import org.springframework.http.HttpMethod;


public class myconstant
{
    // ADMIN
    public static final String AUTH="/api/v1/auth";
    public static final String USERS="/api/v1/users";
    public static final String REGISTER="/register";
    public static final String LOGIN="/login";

    // USER
    public static final String GIFTS="/api/v1/users/gift";
    public static final String LIST="/list";
    

    // //BOOKING
    public static final String BOOKING="/booking";


    public static final List<String> ORGINS=Arrays.asList("http://localhost:4000");
    public static final List<String> HEADERS=Arrays.asList(AUTHORIZATION, CONTENT_TYPE);
    public static final List<String> METHODS=Arrays.asList(GET.name(),POST.name(),PUT.name(),PATCH.name(),DELETE.name(), HttpMethod.HEAD.name());
    

    //JsonWebToken
    public static final String SWAGGER_LOCALHOST_URL="http://localhost:8181";
    public static final String SWAGGER_SECURITY_SCHEME_NAME="baererAuth";
    public static final String SWGGER_SCHEME="bearer";
    public static final String SWAGGER_BEARER_FORMAT="JWT";
    public static final String SWAGGER_DESCRIPTION="Produce a Json WEb Token.";
}
