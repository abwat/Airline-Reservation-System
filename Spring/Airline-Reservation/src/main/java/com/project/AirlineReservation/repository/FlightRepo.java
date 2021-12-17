package com.project.AirlineReservation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.AirlineReservation.model.Flight;

public interface FlightRepo extends JpaRepository<Flight, Long> {
	

}
