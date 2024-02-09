package com.example.project.aparna.config;

import java.util.List;

// import org.springframework.boot.actuate.autoconfigure.observation.ObservationProperties.Http;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.project.aparna.Utils.myconstant;

//import aj.org.objectweb.asm.Type;
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;
import io.swagger.v3.oas.models.security.SecurityScheme.Type;

@Configuration
public class SwaggerApiConfig {

    @Bean
    public OpenAPI openApi(){
        return new OpenAPI().servers(List.of(new Server().url(myconstant.SWAGGER_LOCALHOST_URL)))
        .addSecurityItem(new SecurityRequirement()
        .addList(myconstant.SWAGGER_SECURITY_SCHEME_NAME))
        .components(new Components().addSecuritySchemes(myconstant.SWAGGER_SECURITY_SCHEME_NAME,new SecurityScheme()
        .type(Type.HTTP)
        .scheme(myconstant.SWGGER_SCHEME)
        .description(myconstant.SWAGGER_DESCRIPTION)
        .bearerFormat(myconstant.SWAGGER_BEARER_FORMAT)));
    }
}
