package com.project.AirlineReservation.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.project.AirlineReservation.model.Flight;

public interface FlightRepo extends JpaRepository<Flight, Long> {
	
	List<Flight> findByFlightname(String flightname);
	Flight findByFlightid(long flightid);
	
	
	@Query("SELECT f FROM Flight f WHERE f.source=?1 AND f.destination=?2 AND f.date=?3")
	List<Flight> findBySourceAndDestination(String source,String destination,String date);

}
