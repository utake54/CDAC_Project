package com.floodmanagement.floodmanagement.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.floodmanagement.floodmanagement.dao.RescueRequestDao;
import com.floodmanagement.floodmanagement.model.RescueRequest;
@Service
public class RescueRequestServiceImpl implements RescueRequestService {

	@Autowired
	private RescueRequestDao rescueRequestDao;
	
	
	@Override
	public RescueRequest addRequest(RescueRequest rescueRequests) {
		rescueRequestDao.save(rescueRequests);
		return rescueRequests;
	}

	@Override
	public List<RescueRequest> getRequest() {
		// TODO Auto-generated method stub
		return rescueRequestDao.findAll();
	}

}
