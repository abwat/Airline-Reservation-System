package com.project.AirlineReservation.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.AirlineReservation.model.Booking;
import com.project.AirlineReservation.model.BookingResponseModel;
import com.project.AirlineReservation.model.Flight;
import com.project.AirlineReservation.model.User;
import com.project.AirlineReservation.repository.BookingRepository;
import com.project.AirlineReservation.repository.FlightRepo;
import com.project.AirlineReservation.repository.UserRepository;


@CrossOrigin
@RestController
@RequestMapping("/user/")
public class Usercontroller{
	
	@Autowired
	private BookingRepository bookingrepo;

	@Autowired
	private UserRepository userrepo;
	
	@Autowired
	private FlightRepo flightrepo;
		
	
	
	private BookingResponseModel br=new BookingResponseModel();
	
	@GetMapping("/home")
	public long login() {
		Authentication auth=SecurityContextHolder.getContext().getAuthentication();
		User u=userrepo.findByEmailId(auth.getName());
		return u.getUserId();
	}
	
//	user books flight
	@PostMapping("/{userid}/book/{flightid}")
	public BookingResponseModel book(@PathVariable Long userid,
			@PathVariable Long flightid,@RequestBody Booking b ){
		User u=userrepo.findByUserId(userid);
		Flight f=flightrepo.findByFlightid(flightid);
		int economy=b.getBookedEconomySeats();
		int business=b.getBookedBussinessSeats();
		f.setAvailableEconomySeats(f.getAvailableEconomySeats()-economy);
		f.setAvailableBussinessSeats(f.getAvailableBussinessSeats()-business);
		flightrepo.save(f);
		b.setFlight(f);
		b.setUser(u);
		bookingrepo.save(b);
		
		br.setBookingId(b.getBookingId());
		br.setFlightid(flightid);
		br.setFlightname(f.getFlightname());
		br.setBookedBussinessSeats(business);
		br.setBookedEconomySeats(economy);
		br.setSource(f.getSource());
		br.setDestination(f.getDestination());
		br.setUsername(u.getName());
		return br;
	}
	
//	show all my active booking
	@GetMapping("/bookings/{userid}")
	public List<Booking> showallBookings(@PathVariable Long userid) {
		List<Booking> b=bookingrepo.findAllByUser(userid);
		return b;
	}
	
	
//	get all flights
	@GetMapping("/getflights")
	public List<Flight> getflights(){
		return flightrepo.findAll();
	}
	
	
//	get by source and destination
	@GetMapping("get/{source}/{destination}/{date}")
	public List<Flight> searchFlights(@PathVariable String source,
			@PathVariable String destination,@PathVariable String date){
		List<Flight> f=flightrepo.findBySourceAndDestination(source, destination,date);
		return f;
	}
	
}
