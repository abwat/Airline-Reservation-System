package com.project.AirlineReservation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.AirlineReservation.model.User;

public interface UserRepository extends JpaRepository<User,Long>{

	User findByEmailId(String emailId);
}
