package com.floodmanagement.floodmanagement.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.floodmanagement.floodmanagement.model.Victim;

@Service   //for server to know this is a serviuce ....which is interfce
public interface VictimService {
	
	public Victim registerNewVictim(Victim victim);
	
	public Victim addVictim(Victim victims);	//obj of victim model class
	
	public List<Victim> getVictim();   //get list of victims
	
	public Victim updateOldVictim(Victim victims , Long victimId);
	
	public Victim getVictimById(Long victimId);
	
	
		
	
}
