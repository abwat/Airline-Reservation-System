package com.project.AirlineReservation.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Booking {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long bookingId;
	
	@ManyToOne
//	@JoinColumn(name="flightId")
	private Flight flight;
	
	@ManyToOne
//	@JoinColumn(name="userId")
	private User user;
	
	private int bookedEconomySeats;
	private int bookedBussinessSeats;
	
	
	public Booking() {
		super();
	}
	public Booking(long bookingId, Flight flight, User user, int bookedEconomySeats, int bookedBussinessSeats) {
		super();
		this.bookingId = bookingId;
		this.flight = flight;
		this.user = user;
		this.bookedEconomySeats = bookedEconomySeats;
		this.bookedBussinessSeats = bookedBussinessSeats;
	}
	public long getBookingId() {
		return bookingId;
	}
	public void setBookingId(long bookingId) {
		this.bookingId = bookingId;
	}
	public Flight getFlight() {
		return flight;
	}
	public void setFlight(Flight flight) {
		this.flight = flight;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
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
