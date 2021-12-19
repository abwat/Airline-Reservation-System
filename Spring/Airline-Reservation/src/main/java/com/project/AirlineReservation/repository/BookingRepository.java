package com.project.AirlineReservation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.AirlineReservation.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {
	
	
}
