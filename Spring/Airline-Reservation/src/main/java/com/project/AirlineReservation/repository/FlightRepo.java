package com.project.AirlineReservation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.AirlineReservation.model.Flight;

public interface FlightRepo extends JpaRepository<Flight, Long> {
	
	List<Flight> findByFlightname(String flightname);
	Flight findByFlightid(long flightid);

}
