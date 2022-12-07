package com.floodmanagement.floodmanagement.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.floodmanagement.floodmanagement.config.AppConstants;
import com.floodmanagement.floodmanagement.dao.Role3Dao;
import com.floodmanagement.floodmanagement.dao.RoleDao;
import com.floodmanagement.floodmanagement.dao.VolunteerDao;
import com.floodmanagement.floodmanagement.model.Role;
import com.floodmanagement.floodmanagement.model.Role3;
import com.floodmanagement.floodmanagement.model.Volunteer;

@Service
public class VolunteerServiceImpl implements VolunteerService {
	
	@Autowired
	private VolunteerDao volunteerDao;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private RoleDao roleDao;
	
	@Override
	public Volunteer addVolunteer(Volunteer volunteer) {
		volunteerDao.save(volunteer);
		return volunteer;
	}

	@Override
	public List<Volunteer> getVolunteer() {
		// TODO Auto-generated method stub
		return volunteerDao.findAll();
	}

	@Override
	public Volunteer registerNewVolunteer(Volunteer volunteer) {
		// TODO Auto-generated method stub
		volunteer.setPassword(this.passwordEncoder.encode(volunteer.getPassword()));
		Role role = this.roleDao.findById(AppConstants.VOLUNTEER_USER).get();
		volunteer.getRoles().add(role);
		Volunteer newVolunteer = this.volunteerDao.save(volunteer);
		return newVolunteer;
	}

}
