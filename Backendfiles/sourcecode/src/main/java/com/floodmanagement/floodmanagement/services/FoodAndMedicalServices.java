package com.floodmanagement.floodmanagement.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.floodmanagement.floodmanagement.model.FoodAndMedical;

@Service 
public interface FoodAndMedicalServices {

	public FoodAndMedical addRequest(FoodAndMedical foodAndMedicals);
	
	public List<FoodAndMedical> getRequest();
}
