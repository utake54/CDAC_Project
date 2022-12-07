package com.floodmanagement.floodmanagement.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.floodmanagement.floodmanagement.model.RescueRequest;
@Service 
public interface RescueRequestService {

	public RescueRequest addRequest(RescueRequest rescueRequests);
	
	public List<RescueRequest> getRequest();
}
