package com.floodmanagement.floodmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.floodmanagement.floodmanagement.model.FoodAndMedical;

import com.floodmanagement.floodmanagement.services.FoodAndMedicalServices;

@RestController				//for system to know this is controller
@CrossOrigin(origins = "http://localhost:8180")				//for data transfer in diff server
@RequestMapping("/api/v1/foodmedical")
public class FoodAndMedicalController {

	@Autowired
	private FoodAndMedicalServices foodAndMedicalServices;
	
	@PostMapping("/request")//post method mapping for url reqst (/victims)
	public ResponseEntity<FoodAndMedical> addRequest(@RequestBody FoodAndMedical foodAndMedical) {
		
		FoodAndMedical created=foodAndMedicalServices.addRequest(foodAndMedical);
		
		return new ResponseEntity<>(created,HttpStatus.OK);
	}
	//@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/request")
	public ResponseEntity<List<FoodAndMedical>> getRequest(){
		
		return ResponseEntity.ok(this.foodAndMedicalServices.getRequest());
	}
	
}