package com.KM.KM_Valuers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3001/") // Allow requests from frontend
public class AuthController {

    @Autowired
    private UserRepository userRepository;
   

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest loginRequest) {
        User user = userRepository
                .findByLoginMailIdAndPassword(loginRequest.getUsername(), loginRequest.getPassword())
                .orElse(null);

        if (user != null) {
            return new LoginResponse(true, "Login successful");
        } else {
            return new LoginResponse(false, "Invalid username or password");
        }
    }
}