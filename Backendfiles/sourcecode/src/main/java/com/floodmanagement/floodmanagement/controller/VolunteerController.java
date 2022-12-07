package com.floodmanagement.floodmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.floodmanagement.floodmanagement.model.Volunteer;
import com.floodmanagement.floodmanagement.services.VolunteerService;

@RestController
@CrossOrigin
public class VolunteerController {
	
	@Autowired
	private VolunteerService volunteerService;
	
	@PostMapping("/volunteer")
	public Volunteer addVolunteer(@RequestBody Volunteer volunteer) {
		
		return this.volunteerService.addVolunteer(volunteer);
	}
	
	@GetMapping("/volunteer")
	public List<Volunteer> getVolunteer(){
		
		return this.volunteerService.getVolunteer();
	}
}
