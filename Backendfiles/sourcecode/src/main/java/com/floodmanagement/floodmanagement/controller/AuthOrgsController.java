package com.floodmanagement.floodmanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.floodmanagement.floodmanagement.exception.ApiException;
import com.floodmanagement.floodmanagement.payload.JwtAuthRequest;
import com.floodmanagement.floodmanagement.payload.JwtAuthResponse;
import com.floodmanagement.floodmanagement.security.CustomUserDetailsService2;
import com.floodmanagement.floodmanagement.security.JwtTokenHelper;
import com.floodmanagement.floodmanagement.services.NgoOrganizationService;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/auth/")
public class AuthOrgsController {

	
	@Autowired
	private UserDetailsService myUserDetailsService;
	@Autowired
	private JwtTokenHelper jwtTokenHelper;
	
	@Autowired
	private CustomUserDetailsService2 ngoOrganizationService;
	@Autowired
	private AuthenticationManager authenticationManager;
	
	
	@PostMapping("/login/orgs")
	public ResponseEntity<JwtAuthResponse> createToken2 (
			@RequestBody JwtAuthRequest request
			) throws Exception{
		this.authenticate(request.getUsername(),request.getPassword());
		UserDetails userDetails = this.ngoOrganizationService.loadUserByUsername(request.getUsername());
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
}}
