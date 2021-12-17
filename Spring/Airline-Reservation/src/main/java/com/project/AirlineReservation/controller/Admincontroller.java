package com.project.AirlineReservation.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.project.AirlineReservation.model.Admin;
import com.project.AirlineReservation.model.User;
import com.project.AirlineReservation.repository.AdminRepository;
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
	
	
	
//	Admin add flight
	
	
	
//	delete flights
	
	
	
//	update flights
}
