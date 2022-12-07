package com.floodmanagement.floodmanagement.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.floodmanagement.floodmanagement.dao.NgoOrganizationDao;
import com.floodmanagement.floodmanagement.dao.VictimDao;
import com.floodmanagement.floodmanagement.dao.VolunteerDao;
import com.floodmanagement.floodmanagement.exception.ResourceNotFoundExceptionByUserName;
import com.floodmanagement.floodmanagement.model.NgoOrganization;
import com.floodmanagement.floodmanagement.model.Victim;
import com.floodmanagement.floodmanagement.model.Volunteer;

@Service
@Component("myUserDetailsService")
public class CustomUserDetailService implements UserDetailsService {
	@Autowired
	private VictimDao victimDao;
	


	
	@Autowired
	private VolunteerDao volunteerDao;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	// TODO Auto-generated method stub
	
	//loading user from database by username
		Victim victim= this.victimDao.findByUsername(username).orElseThrow(()-> new ResourceNotFoundExceptionByUserName("User","username ",username) );
	
		return victim;
	}
	
	
	
	public UserDetails loadUserByUsername3(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		
		//loading user from database by username
		Volunteer volunteer= this.volunteerDao.findByUsername(username).orElseThrow(()-> new ResourceNotFoundExceptionByUserName("User","username ",username) );
		
			return volunteer;
		}

}
