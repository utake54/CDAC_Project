package com.floodmanagement.floodmanagement.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class RescueRequest {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private int id;
	
	private String vContact;
	
	private String vAddress;
	
	private int  vCount;
	
	private String username;
	
	public RescueRequest() {}

	public RescueRequest(int id, String vContact, String vAddress, int vCount, String username) {
		super();
		this.id = id;
		this.vContact = vContact;
		this.vAddress = vAddress;
		this.vCount = vCount;
		this.username = username;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getvContact() {
		return vContact;
	}

	public void setvContact(String vContact) {
		this.vContact = vContact;
	}

	public String getvAddress() {
		return vAddress;
	}

	public void setvAddress(String vAddress) {
		this.vAddress = vAddress;
	}

	public int getvCount() {
		return vCount;
	}

	public void setvCount(int vCount) {
		this.vCount = vCount;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
	
}
