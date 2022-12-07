
package com.floodmanagement.floodmanagement.payload;

import com.floodmanagement.floodmanagement.model.Victim;

public class JwtAuthResponse {

	private String token;
	
	private Victim victim;

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public Victim getVictim() {
		return victim;
	}

	public void setVictim(Victim victim) {
		this.victim = victim;
	}
	
	
	
}
