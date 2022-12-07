package com.floodmanagement.floodmanagement.dao;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


import com.floodmanagement.floodmanagement.model.Victim;



public interface VictimDao extends JpaRepository<Victim, Long> {
	
//	UserDetails<Victim> findByUserName(String userName);
	
	Optional<Victim> findByUsername (String username);

	
	
}
