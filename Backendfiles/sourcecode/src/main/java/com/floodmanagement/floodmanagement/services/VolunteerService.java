package com.floodmanagement.floodmanagement.services;

import java.util.List;

import org.springframework.stereotype.Service;


import com.floodmanagement.floodmanagement.model.Volunteer;

@Service
public interface VolunteerService {
	
	public Volunteer registerNewVolunteer(Volunteer volunteer);
	
	public Volunteer addVolunteer(Volunteer volunteer);
	
	public List<Volunteer> getVolunteer();
}
