package com.project.AirlineReservation.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled=true)
public class UserSecurityConfig extends WebSecurityConfigurerAdapter{
	
	@Bean
	 public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	
		
		@Autowired
		private UserDetailsService userdetailsService;
		

		
		@Override
		protected void configure(HttpSecurity http)throws Exception{
			http.csrf().disable();
			http.authorizeRequests()
			.antMatchers("/admin/*").permitAll()
			.antMatchers("/auth/register")
			.permitAll()
			.antMatchers("/user/home").hasAuthority("USER")
			.anyRequest().authenticated().and().httpBasic();
		}
		
		
		@Bean
		public AuthenticationProvider authenticationProvide() {
			DaoAuthenticationProvider provider=new DaoAuthenticationProvider();
			provider.setUserDetailsService(userdetailsService);
			provider.setPasswordEncoder(passwordEncoder());
			return provider;
		}
	}
	
	



