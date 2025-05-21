package com.KM.KM_Valuers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000/") // Allow requests from frontend
public class AuthController {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private CreditorRepository creditorRepository;
    
    @Autowired
    private InwardRegisterRepository inwardRegisterRepository;
   

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

    @GetMapping("/banks")
    public List<Creditor> getAllBanks() {
        return creditorRepository.findAll();
    }

    @GetMapping("/inward_register")
    public List<InwardRegisterDTO> getPendingInwardRegisters() {
        List<Object[]> results = inwardRegisterRepository.findPendingInwardRegisters();
        List<InwardRegisterDTO> dtos = new ArrayList<>();
        for (Object[] row : results) {
            InwardRegisterDTO dto = new InwardRegisterDTO();
            dto.setSNo(((Number) row[0]).longValue());
            dto.setFileNumber((String) row[1]);
            dto.setBank((String) row[2]);
            dto.setInwardDate(row[3] != null ? row[3].toString() : null);
            dto.setVillageOrTown((String) row[4]);
            dto.setStatus((String) row[5]);
            dto.setRemarks((String) row[6]);
            dtos.add(dto);
        }
        return dtos;
    }

    @GetMapping("/inward_register/{fileNumber}")
    public InwardRegister getInwardRegisterByFileNumber(@PathVariable String fileNumber) {
        return inwardRegisterRepository.findByFileNumber(fileNumber)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "File not found"));
    }
}