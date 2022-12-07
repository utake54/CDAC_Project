package com.floodmanagement.floodmanagement.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.floodmanagement.floodmanagement.exception.ResourceNotFoundException;
import com.floodmanagement.floodmanagement.config.AppConstants;
import com.floodmanagement.floodmanagement.dao.RoleDao;
import com.floodmanagement.floodmanagement.dao.VictimDao;
import com.floodmanagement.floodmanagement.model.Role;
import com.floodmanagement.floodmanagement.model.Victim;

@Service
public class VictimServiceImpl implements VictimService {
	
	
	@Autowired
	private VictimDao victimDao;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private RoleDao roleDao;
	
	
	@Override
	public Victim addVictim(Victim victims) {
		
		victimDao.save(victims);
		return victims;
	}


	@Override
	public List<Victim> getVictim() {
		
		//findall o return all vicitms
		return victimDao.findAll();
		
	}


	@Override
	public Victim updateOldVictim(Victim victims, Long victimId) {
		// TODO Auto-generated method stub
		
		Victim victim = this.victimDao.findById(victimId).orElseThrow(() -> new ResourceNotFoundException("Victim","victimId" ,victimId));
		
		
		
		return victim;
	}


	@Override
	public Victim getVictimById(Long victimId) {
		// TODO Auto-generated method stub
		
		Victim found = this.victimDao.findById(victimId).orElseThrow(() -> new ResourceNotFoundException("Victim","victimId" ,victimId));
		
		
		return found;
	}


	@Override
	public Victim registerNewVictim(Victim victim) {
		// TODO Auto-generated method stub
		victim.setPassword(this.passwordEncoder.encode(victim.getPassword()));
		Role role = this.roleDao.findById(AppConstants.NORMAL_USER).get();
		victim.getRoles().add(role);
		
		Victim newVictim = this.victimDao.save(victim);
		
		
		return newVictim;
	}


	
	


}
