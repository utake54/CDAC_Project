package com.floodmanagement.floodmanagement.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Role2 {
		
	@Id
	
	private int id;
	
	private String name;

	public Role2() { }
	
	public Role2(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
}