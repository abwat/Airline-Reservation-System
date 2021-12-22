package com.project.AirlineReservation.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.project.AirlineReservation.Exceptions.ResourceNotFoundException;
import com.project.AirlineReservation.model.Admin;
import com.project.AirlineReservation.model.Flight;
import com.project.AirlineReservation.model.User;
import com.project.AirlineReservation.repository.AdminRepository;
import com.project.AirlineReservation.repository.FlightRepo;
import com.project.AirlineReservation.repository.UserRepository;

@CrossOrigin
@RestController
@RequestMapping("/admin/")
public class Admincontroller {

	@Autowired
	private UserRepository userrepo;
	
	@Autowired
	private AdminRepository adminrepo;
	
	@GetMapping("/getusers")
	public List<User> getAllUser(){
		return userrepo.findAll();
	}
	
	
	//Admin login
	@PostMapping("/AdminHome")
	public int adminlogin(@RequestBody Admin a ,HttpServletResponse res) throws IOException
	{
		System.out.println();
		String email=a.getEmailId();
		String password=a.getPassword();
		
		try {
			Admin a1= (Admin) adminrepo.findByEmailId(email);
			if((a1.getPassword()).equals(password))
			{
				return 200;
			}
		}
		catch(Exception e)
		{
			System.out.println(e);
			res.sendRedirect("/NotAdmin");
			return 400;
		}
		res.sendRedirect("/NotAdmin");
		return 400;
	}
	
	@GetMapping("/NotAdmin")
	@ResponseStatus(code=HttpStatus.NOT_FOUND)
	public String notfound() {
		return "";
	}
	
	//Admin get flights
	@Autowired
	private FlightRepo flightrepo;
	@GetMapping("/getflights")
	public List<Flight> getflights(){
		return flightrepo.findAll();
	}
	
	
//	Admin add flight
	@PostMapping("/addflights")
	public Flight addflight(@RequestBody Flight f){
		return flightrepo.save(f);
	}
	
	
//	delete flights
	@DeleteMapping("/deleteflight/{flightid}")
	public ResponseEntity<Map<String ,Boolean>> deleteFlight(@PathVariable Long flightid){
		Flight f=flightrepo.findByFlightid(flightid);
		if (f==null) {
			throw new ResourceNotFoundException("not found");
		}
		flightrepo.delete(f);
		Map<String,Boolean> response=new HashMap();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
//	update flight status
	@GetMapping("/updateflight/{flightid}/{status}")
	public ResponseEntity<Flight> updateflightStatus(@PathVariable Long flightid,@PathVariable String status){
		
		Flight f=flightrepo.findByFlightid(flightid);
		if (f==null) {
			throw new ResourceNotFoundException("not found");
		}
		f.setStatus(status);
		flightrepo.save(f);
		return ResponseEntity.ok(f);
	}
	
	
	
//	search flight
	@GetMapping("/flight/{name}")
	public ResponseEntity<List<Flight>> getFlightByName(@PathVariable String name){
		List<Flight> fs=flightrepo.findByFlightname(name);
		return ResponseEntity.ok(fs);
	}
}
