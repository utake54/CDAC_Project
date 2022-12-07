 package com.floodmanagement.floodmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.floodmanagement.floodmanagement.model.Victim;
import com.floodmanagement.floodmanagement.services.VictimService;

@RestController				//for system to know this is controller
@CrossOrigin				//for data transfer in diff server
@RequestMapping("/api/v1/victims")
public class VictimController {
	
	@Autowired              //making obj of interface which is niot allowedd
	private VictimService victimService;
	
	@PostMapping("/")//post method mapping for url reqst (/victims)
	public ResponseEntity<Victim> addVictim(@RequestBody Victim victims) {
		
		Victim created=victimService.addVictim(victims);
		
		return new ResponseEntity<>(created,HttpStatus.CREATED);
	}
	
	@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/")
	public ResponseEntity<List<Victim>> getVictim(){
		
		return ResponseEntity.ok(this.victimService.getVictim());
	}
	
//	@PutMapping("/{victimId}")
//	public ResponseEntiy<Victim> updateOldVictim(@RequestBody Victim victim, @PathVariable Long victimId ){
//		Victim updated= this.victimService.updateOldVictim(victim, victimId);
//		return ResponseEntity.ok(updated);
//	}
	@GetMapping("/{victimId}")
	public ResponseEntity<Victim> getVictimById(@PathVariable Long victimId){
		
		return ResponseEntity.ok(this.victimService.getVictimById(victimId));
	}
	
	
}
