package com.KM.KM_Valuers;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"}) // Allow requests from both frontend ports
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

    

    @GetMapping("/inward_register/search/village/{village}")
    public List<InwardRegisterDTO> searchByVillage(@PathVariable String village) {
        List<Object[]> results = inwardRegisterRepository.findByVillageContainingIgnoreCase(village);
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

    @GetMapping("/inward_register/search/file/{fileNumber}")
    public List<InwardRegisterDTO> searchByFileNumber(@PathVariable String fileNumber) {
        List<Object[]> results = inwardRegisterRepository.findByFileNumberContainingIgnoreCase(fileNumber);
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

    @GetMapping("/inward_register/search/date/{date}")
    public List<InwardRegisterDTO> searchByDate(@PathVariable String date) {
        List<Object[]> results = inwardRegisterRepository.findByInwardDate(date);
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

    @GetMapping("/inward_register/recent")
    public List<InwardRegisterDTO> getRecentPendingInwardRegisters() {
        List<Object[]> results = inwardRegisterRepository.findPendingInwardRegisters();
        List<InwardRegisterDTO> dtos = new ArrayList<>();
        LocalDate today = LocalDate.now();
        LocalDate twoDaysAgo = today.minusDays(1); // last 2 days: today and yesterday
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        for (Object[] row : results) {
            String inwardDateStr = row[3] != null ? row[3].toString() : null;
            if (inwardDateStr != null) {
                try {
                    LocalDate inwardDate = LocalDate.parse(inwardDateStr, formatter);
                    if (!inwardDate.isBefore(twoDaysAgo) && !inwardDate.isAfter(today)) {
                        InwardRegisterDTO dto = new InwardRegisterDTO();
                        dto.setSNo(((Number) row[0]).longValue());
                        dto.setFileNumber((String) row[1]);
                        dto.setBank((String) row[2]);
                        dto.setInwardDate(inwardDateStr);
                        dto.setVillageOrTown((String) row[4]);
                        dto.setStatus((String) row[5]);
                        dto.setRemarks((String) row[6]);
                        dtos.add(dto);
                    }
                } catch (Exception e) {
                    // Ignore parse errors
                }
            }
        }
        return dtos;
    }
}