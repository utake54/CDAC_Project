package com.floodmanagement.floodmanagement.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.floodmanagement.floodmanagement.dao.NgoOrganizationDao;
import com.floodmanagement.floodmanagement.dao.VolunteerDao;
import com.floodmanagement.floodmanagement.exception.ResourceNotFoundExceptionByUserName;
import com.floodmanagement.floodmanagement.model.NgoOrganization;
import com.floodmanagement.floodmanagement.model.Volunteer;

@Service
@Component("myUserDetailsService2")
public class CustomUserDetailsService2 implements UserDetailsService{

	@Autowired
	private NgoOrganizationDao ngoOrganizationDao;
	
	@Autowired
	private VolunteerDao volunteerDao;

//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		// TODO Auto-generated method stub
//		NgoOrganization orgs= this.ngoOrganizationDao.findByUsername(username).orElseThrow(()-> new ResourceNotFoundExceptionByUserName("User","username ",username) );
//		
//		return orgs;
//	}
	
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		
		//loading user from database by username
		Volunteer volunteer= this.volunteerDao.findByUsername(username).orElseThrow(()-> new ResourceNotFoundExceptionByUserName("User","username ",username) );
		
			return volunteer;
		}
}
