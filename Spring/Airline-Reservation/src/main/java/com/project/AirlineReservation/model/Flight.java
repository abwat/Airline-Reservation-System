package com.project.AirlineReservation.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Flight {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long flightid;
	
	private String flightname;
	private String source;
	private String destination;
	private String status;
	private int availableEconomySeats;
	private int availableBussinessSeats;
	private int price;
	
//	format dd-mm-yy
	private String date;
	
//	format hh-mm-ss
	private String time;
	
	@OneToMany(mappedBy="flight",cascade=CascadeType.REMOVE)
	private List<Booking> booking=new ArrayList<Booking>();
	
	public Flight() {
		super();
	}
	
	

	public Flight(long flightid, String flightname, String source, String destination, String status,
			int availableEconomySeats, int availableBussinessSeats, int price, String date, String time,
			List<Booking> booking) {
		super();
		this.flightid = flightid;
		this.flightname = flightname;
		this.source = source;
		this.destination = destination;
		this.status = status;
		this.availableEconomySeats = availableEconomySeats;
		this.availableBussinessSeats = availableBussinessSeats;
		this.price = price;
		this.date = date;
		this.time = time;
		this.booking = booking;
	}



	public long getFlightid() {
		return flightid;
	}

	public void setFlightid(long flightid) {
		this.flightid = flightid;
	}

	public String getFlightname() {
		return flightname;
	}

	public void setFlightname(String flightname) {
		this.flightname = flightname;
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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getAvailableEconomySeats() {
		return availableEconomySeats;
	}

	public void setAvailableEconomySeats(int availableEconomySeats) {
		this.availableEconomySeats = availableEconomySeats;
	}

	public int getAvailableBussinessSeats() {
		return availableBussinessSeats;
	}

	public void setAvailableBussinessSeats(int availableBussinessSeats) {
		this.availableBussinessSeats = availableBussinessSeats;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
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

	
}
