package com.floodmanagement.floodmanagement.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.floodmanagement.floodmanagement.model.NgoOrganization;


@Service
public interface NgoOrganizationService {
	
	public NgoOrganization registerNewNgoOrganization(NgoOrganization ngos);
	
	public NgoOrganization addNgoOrganization(NgoOrganization ngos);
	
	public List<NgoOrganization> getNgoOrganization();
}
