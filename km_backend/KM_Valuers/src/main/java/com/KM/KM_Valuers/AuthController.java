package com.KM.KM_Valuers;

import com.KM.KM_Valuers.LoginRequest;
import com.KM.KM_Valuers.LoginResponse;
import com.KM.KM_Valuers.User;
import com.KM.KM_Valuers.UserRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000/") // Allow requests from frontend
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