package com.proiect.is;

import com.proiect.is.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@RequiredArgsConstructor
public class IsApplication {
    private final UserRepository userRepository;

    public static void main(String[] args) {
        SpringApplication.run(IsApplication.class, args);
    }
}
