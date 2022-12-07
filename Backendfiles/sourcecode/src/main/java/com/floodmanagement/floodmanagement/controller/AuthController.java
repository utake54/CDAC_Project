package com.floodmanagement.floodmanagement.controller;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.floodmanagement.floodmanagement.exception.ApiException;
import com.floodmanagement.floodmanagement.model.NgoOrganization;
import com.floodmanagement.floodmanagement.model.Victim;
import com.floodmanagement.floodmanagement.model.Volunteer;
import com.floodmanagement.floodmanagement.payload.JwtAuthRequest;
import com.floodmanagement.floodmanagement.payload.JwtAuthResponse;
import com.floodmanagement.floodmanagement.security.CustomUserDetailService;
import com.floodmanagement.floodmanagement.security.CustomUserDetailsService2;
import com.floodmanagement.floodmanagement.security.JwtTokenHelper;
import com.floodmanagement.floodmanagement.services.NgoOrganizationService;
import com.floodmanagement.floodmanagement.services.VictimService;
import com.floodmanagement.floodmanagement.services.VolunteerService;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/auth/")
public class AuthController {

	@Autowired
	private JwtTokenHelper jwtTokenHelper;
	
	@Autowired
	private CustomUserDetailsService2 customUserDetailsService2;
	@Autowired
	private VolunteerService volunteerService;
	
	@Autowired
	private NgoOrganizationService ngoOrganizationService;
	
	@Autowired
	private UserDetailsService myUserDetailsService;
	
	@Autowired
	@Qualifier(value = "myUserDetailsService2")
	private UserDetailsService myUserDetailsService2;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private VictimService victimService;
	
	@PostMapping("/login/victim")
	public ResponseEntity<JwtAuthResponse> createToken (
			@RequestBody JwtAuthRequest request
			) throws Exception{
		
		this.authenticate(request.getUsername(),request.getPassword());
		UserDetails userDetails = this.myUserDetailsService. loadUserByUsername(request.getUsername());
		String token = this.jwtTokenHelper.generateToken(userDetails);
		

		JwtAuthResponse response =new JwtAuthResponse();
		response.setToken(token);
		response.getVictim();
		return new ResponseEntity<JwtAuthResponse>(response,HttpStatus.OK);
	}
	
	
	
	@PostMapping("/login/volunteers")
	public ResponseEntity<JwtAuthResponse> createToken3 (
			@RequestBody JwtAuthRequest request
			) throws Exception{
		this.authenticate(request.getUsername(),request.getPassword());
		UserDetails userDetails = this.myUserDetailsService.loadUserByUsername(request.getUsername());
		String token = this.jwtTokenHelper.generateToken(userDetails);
		
		
		JwtAuthResponse response =new JwtAuthResponse();
		response.setToken(token);
		
		return new ResponseEntity<JwtAuthResponse>(response,HttpStatus.OK);
	}
	
	
	
	private void authenticate(String username, String password) throws Exception {
		// TODO Auto-generated method stub
		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
		try {
		this.authenticationManager.authenticate(authenticationToken);
		}catch(BadCredentialsException e) {
			System.out.println("Invalid Details !!");
			throw new ApiException("Invalid Username or Password !!");
		}
		
	}	
	
	@PostMapping("/register/victim")
	public ResponseEntity<Victim> registerNewVictim(@RequestBody Victim victim){
		
		Victim registeredVictim =this.victimService.registerNewVictim(victim);
		return new ResponseEntity<Victim>(registeredVictim, HttpStatus.OK);
		
	}
	
	@PostMapping("/register/volunteer")
	public ResponseEntity<Volunteer> registerNewVolunteer(@RequestBody Volunteer volunteer){
		
		Volunteer registeredVolunteer =this.volunteerService.registerNewVolunteer(volunteer);
		return new ResponseEntity<Volunteer>(registeredVolunteer, HttpStatus.OK);
		
	}
	@PostMapping("/register/orgs")
	public ResponseEntity<NgoOrganization> registerNewNgoOrganization(@RequestBody NgoOrganization ngos){
		
		NgoOrganization registeredNgoOrganization =this.ngoOrganizationService.registerNewNgoOrganization(ngos);
		return new ResponseEntity<NgoOrganization>(registeredNgoOrganization, HttpStatus.OK);
		
	}
	
	
}
