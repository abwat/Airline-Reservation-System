package com.project.AirlineReservation.model;

import javax.persistence.ManyToOne;

public class BookingResponseModel {

    private long bookingId;
	
	private Long flightid;
	
	private String flightname;
	
	private String username;
	
	private String source;
	
	private String destination;
	
	private int bookedEconomySeats;
	private int bookedBussinessSeats;
	
	private String date;
	
	private String time;
	
	public BookingResponseModel() {
		super();
	}


	


	public BookingResponseModel(long bookingId, Long flightid, String flightname, String username, String source,
			String destination, int bookedEconomySeats, int bookedBussinessSeats, String date, String time) {
		super();
		this.bookingId = bookingId;
		this.flightid = flightid;
		this.flightname = flightname;
		this.username = username;
		this.source = source;
		this.destination = destination;
		this.bookedEconomySeats = bookedEconomySeats;
		this.bookedBussinessSeats = bookedBussinessSeats;
		this.date = date;
		this.time = time;
	}





	public String getDate() {
		return date;
	}





	public void setDate(String date) {
		this.date = date;
	}





	public String getTime() {
		return time;
	}





	public void setTime(String time) {
		this.time = time;
	}





	public long getBookingId() {
		return bookingId;
	}


	public void setBookingId(long bookingId) {
		this.bookingId = bookingId;
	}


	public Long getFlightid() {
		return flightid;
	}


	public void setFlightid(Long flightid) {
		this.flightid = flightid;
	}


	public String getFlightname() {
		return flightname;
	}


	public void setFlightname(String flightname) {
		this.flightname = flightname;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getSource() {
		return source;
	}


	public void setSource(String source) {
		this.source = source;
	}


	public String getDestination() {
		return destination;
	}


	public void setDestination(String destination) {
		this.destination = destination;
	}


	public int getBookedEconomySeats() {
		return bookedEconomySeats;
	}


	public void setBookedEconomySeats(int bookedEconomySeats) {
		this.bookedEconomySeats = bookedEconomySeats;
	}


	public int getBookedBussinessSeats() {
		return bookedBussinessSeats;
	}


	public void setBookedBussinessSeats(int bookedBussinessSeats) {
		this.bookedBussinessSeats = bookedBussinessSeats;
	}
	
	
}
