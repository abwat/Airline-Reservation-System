package com.project.AirlineReservation.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Flight {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long flightId;
	private String flightname;
	private String source;
	private String destination;
	private String status;
	private int availableEconomySeats;
	private int availableBussinessSeats;
	
	@OneToMany
	private List<Booking> booking;
	
	public Flight() {
		super();
	}
	
	
	
	public Flight(long flightId, String flightname, String source, String destination, String status,
			int availableEconomySeats, int availableBussinessSeats, List<Booking> booking) {
		super();
		this.flightId = flightId;
		this.flightname = flightname;
		this.source = source;
		this.destination = destination;
		this.status = status;
		this.availableEconomySeats = availableEconomySeats;
		this.availableBussinessSeats = availableBussinessSeats;
		this.booking = booking;
	}



	public long getFlightId() {
		return flightId;
	}
	public void setFlightId(long flightId) {
		this.flightId = flightId;
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
	public void setAvailableBussiSeats(int availableBussinessSeats) {
		this.availableBussinessSeats = availableBussinessSeats;
	}



	public List<Booking> getBooking() {
		return booking;
	}



	public void setBooking(List<Booking> booking) {
		this.booking = booking;
	}
	
}
