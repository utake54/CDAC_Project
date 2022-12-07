package com.floodmanagement.floodmanagement.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.floodmanagement.floodmanagement.model.NgoOrganization;
import com.floodmanagement.floodmanagement.services.NgoOrganizationService;

@RestController				//for system to know this is controller
@CrossOrigin				//for data transfer in diff server
public class NgoOrganizationController {
		
	@Autowired
	private NgoOrganizationService ngoOrganizationService;
	
	@PostMapping("/ngos")
	public NgoOrganization addNgoOrganization(@RequestBody NgoOrganization ngos) {
		return this.ngoOrganizationService.addNgoOrganization(ngos);
	}
	
	@GetMapping("/ngos")
	public List<NgoOrganization> getNgoOrganization(){
		return this.ngoOrganizationService.getNgoOrganization();
	}
}
