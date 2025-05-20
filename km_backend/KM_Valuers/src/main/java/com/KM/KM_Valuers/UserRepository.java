package com.KM.KM_Valuers;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByLoginMailIdAndPassword(String loginMailId, String password);
}