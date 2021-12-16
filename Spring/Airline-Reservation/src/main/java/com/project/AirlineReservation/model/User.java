package com.project.AirlineReservation.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;


@Entity
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long userId;
	
	private String name;
	
	private String password;
	
	private String address;
	
	private String emailId;
	private String gender;
	private int age;
	
	private long phonenumber;
	
	@OneToMany
	private List<Booking> booking;
	
	
	
	public User() {
//		super();
	}

	
	public User(long userId, String name, String password, String address, String emailId, String gender, int age,
			long phonenumber, List<Booking> booking) {
		super();
		this.userId = userId;
		this.name = name;
		this.password = password;
		this.address = address;
		this.emailId = emailId;
		this.gender = gender;
		this.age = age;
		this.phonenumber = phonenumber;
		this.booking = booking;
	}



	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public Long getPhonenumber() {
		return phonenumber;
	}
	public void setPhonenumber(Long phonenumber) {
		this.phonenumber = phonenumber;
	}


	public List<Booking> getBooking() {
		return booking;
	}


	public void setBooking(List<Booking> booking) {
		this.booking = booking;
	}
	
}
