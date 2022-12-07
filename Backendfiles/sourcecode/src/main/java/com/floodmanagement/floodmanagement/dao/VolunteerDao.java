package com.floodmanagement.floodmanagement.dao;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


import com.floodmanagement.floodmanagement.model.Volunteer;

public interface VolunteerDao extends JpaRepository<Volunteer,Long> {
	
	
	Optional<Volunteer> findByUsername (String username);
}
