package com.project.AirlineReservation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.project.AirlineReservation.model.Booking;
import com.project.AirlineReservation.model.User;

public interface BookingRepository extends JpaRepository<Booking, Long> {
	
	@Query("SELECT b from Booking b WHERE b.user.userId=?1")
	List<Booking> findAllByUser(Long userid);
}
