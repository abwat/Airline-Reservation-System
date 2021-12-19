package com.project.AirlineReservation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.AirlineReservation.model.Flight;
import com.project.AirlineReservation.model.User;
import com.project.AirlineReservation.repository.FlightRepo;
import com.project.AirlineReservation.repository.UserRepository;



@CrossOrigin
@RestController
@RequestMapping("/auth/")
public class Authcontroller {
	@Autowired
	private PasswordEncoder passencoder;
	
	@Autowired
	private UserRepository userrepo;
	
	@Autowired
	private FlightRepo flightrepo;
	
	@PostMapping("/register")
	public User register(@RequestBody User user) {
		user.setPassword(passencoder.encode(user.getPassword()));
		return userrepo.save(user);
	}
	
	
	//get all flights for guest members
	@GetMapping("/getflights")
	public List<Flight> getflights(){
		return flightrepo.findAll();
	}
}
