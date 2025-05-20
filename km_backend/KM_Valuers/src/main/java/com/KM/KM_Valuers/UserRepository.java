package com.KM.KM_Valuers;


import com.KM.KM_Valuers.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByLoginMailIdAndPassword(String loginMailId, String password);
}