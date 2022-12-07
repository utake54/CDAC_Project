package com.floodmanagement.floodmanagement.dao;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.floodmanagement.floodmanagement.model.NgoOrganization;



public interface NgoOrganizationDao extends JpaRepository<NgoOrganization, Long>{

	Optional<NgoOrganization> findByUsername (String username);
}
