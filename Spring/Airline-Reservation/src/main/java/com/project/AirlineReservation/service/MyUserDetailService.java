package com.project.AirlineReservation.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.project.AirlineReservation.model.User;
import com.project.AirlineReservation.model.Userprincipal;
import com.project.AirlineReservation.repository.UserRepository;

//import com.project.AirlineReservation.model.User;

@Service("userser")
public class MyUserDetailService implements UserDetailsService {

	@Autowired
	UserRepository userrepo;
	
	@Override
	public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
		User user=userrepo.findByEmailId(name);
		if (user==null) {
			throw new UsernameNotFoundException("User not found");
		}
		return new Userprincipal(user);
	}

	
}
