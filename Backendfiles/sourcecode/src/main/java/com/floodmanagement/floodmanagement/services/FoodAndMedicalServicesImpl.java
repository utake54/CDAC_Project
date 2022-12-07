package com.floodmanagement.floodmanagement.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.floodmanagement.floodmanagement.dao.FoodAndMedicalDao;
import com.floodmanagement.floodmanagement.model.FoodAndMedical;
@Service
public class FoodAndMedicalServicesImpl implements FoodAndMedicalServices{

	
	@Autowired
	private FoodAndMedicalDao foodAndMedicalDao;
	
	
	@Override
	public FoodAndMedical addRequest(FoodAndMedical foodAndMedicals) {
		// TODO Auto-generated method stub
		foodAndMedicalDao.save(foodAndMedicals);
		return foodAndMedicals;
	}

	@Override
	public List<FoodAndMedical> getRequest() {
		// TODO Auto-generated method stub
		return foodAndMedicalDao.findAll();
	}
	

}
