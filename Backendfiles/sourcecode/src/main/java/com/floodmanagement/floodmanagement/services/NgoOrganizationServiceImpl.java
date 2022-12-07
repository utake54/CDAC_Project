package com.floodmanagement.floodmanagement.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.floodmanagement.floodmanagement.config.AppConstants;
import com.floodmanagement.floodmanagement.dao.NgoOrganizationDao;
import com.floodmanagement.floodmanagement.dao.Role2Dao;
import com.floodmanagement.floodmanagement.dao.RoleDao;
import com.floodmanagement.floodmanagement.model.NgoOrganization;
import com.floodmanagement.floodmanagement.model.Role;
import com.floodmanagement.floodmanagement.model.Role2;

@Service
public class NgoOrganizationServiceImpl implements NgoOrganizationService {
	
	@Autowired
	private NgoOrganizationDao ngoOrganizationDao;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private RoleDao roleDao;
	
	@Override
	public NgoOrganization addNgoOrganization(NgoOrganization ngos) {
		ngoOrganizationDao.save(ngos);
		return ngos;
	}

	@Override
	public List<NgoOrganization> getNgoOrganization() {
		return ngoOrganizationDao.findAll();
	}

	@Override
	public NgoOrganization registerNewNgoOrganization(NgoOrganization ngos) {
		// TODO Auto-generated method stub
		ngos.setPassword(this.passwordEncoder.encode(ngos.getPassword()));
		Role role = this.roleDao.findById(AppConstants.NGO_USER).get();
		ngos.getRoles().add(role);
		NgoOrganization newNgoOrganization = this.ngoOrganizationDao.save(ngos);
		return newNgoOrganization;
	}
	
	
	

}
