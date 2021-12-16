package com.project.AirlineReservation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.AirlineReservation.model.Admin;


public interface AdminRepository extends JpaRepository<Admin, Long> {

	Admin findByEmailId(String emailId);
}
