package com.floodmanagement.floodmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.floodmanagement.floodmanagement.model.RescueRequest;

import com.floodmanagement.floodmanagement.services.RescueRequestService;

@RestController				//for system to know this is controller
@CrossOrigin(origins = "http://localhost:8180")				//for data transfer in diff server
@RequestMapping("/api/v1/rescue")
public class RescueRequestController {

	@Autowired 
	private RescueRequestService rescueRequestService;
	
	
	@PostMapping("/request")//post method mapping for url reqst (/victims)
	public ResponseEntity<RescueRequest> addRequest(@RequestBody RescueRequest rescueRequest) {
		
		RescueRequest created=rescueRequestService.addRequest(rescueRequest);
		
		return new ResponseEntity<>(created,HttpStatus.OK);
	}
	//@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/request")
	public ResponseEntity<List<RescueRequest>> getRequest(){
		
		return ResponseEntity.ok(this.rescueRequestService.getRequest());
	}
	
}

