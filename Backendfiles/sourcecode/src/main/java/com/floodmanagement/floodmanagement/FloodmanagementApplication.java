package com.floodmanagement.floodmanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.CommandLineRunner;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.floodmanagement.floodmanagement.config.AppConstants;
import com.floodmanagement.floodmanagement.dao.Role2Dao;
import com.floodmanagement.floodmanagement.dao.Role3Dao;
import com.floodmanagement.floodmanagement.dao.RoleDao;
import com.floodmanagement.floodmanagement.model.Role;
import com.floodmanagement.floodmanagement.model.Role2;
import com.floodmanagement.floodmanagement.model.Role3;


@SpringBootApplication
public class FloodmanagementApplication implements CommandLineRunner{

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private RoleDao roleDao;
	
	@Autowired
	private Role2Dao role2Dao;
	
	@Autowired
	private Role3Dao role3Dao;
	
	public static void main(String[] args) {
		SpringApplication.run(FloodmanagementApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		System.out.println(this.passwordEncoder.encode("Umer@123"));
		
		try {
			Role role = new Role();
			role.setId(AppConstants.ADMIN_USER);
			role.setName("ROLE_ADMIN");
			
			Role role1 = new Role();
			role1.setId(AppConstants.NORMAL_USER);
			role1.setName("ROLE_VICTIM");
			
			Role role2 = new Role();
			role2.setId(AppConstants.NGO_USER);			
			role2.setName("ROLE_NGO");
			
			Role role3 = new Role();
			role3.setId(AppConstants.VOLUNTEER_USER);			
			role3.setName("ROLE_VOLUNTEER");
//			
////			Role3 role4 = new Role3();
////			role1.setId(AppConstants.ADMIN_USER);
////			role1.setName("ROLE_ADMIN");
//			
//			Role3 role5 = new Role3();
//			role1.setId(AppConstants.VOLUNTEER_USER);
//			role1.setName("ROLE_VOLUNTEER");
//			
			
			
			List<Role> roles = List.of(role,role1,role2,role3);
			
			List<Role> result = this.roleDao.saveAll(roles);
			
//			List<Role2> roles2= List.of(role3);
//			
//			List<Role2> result2 = this.role2Dao.saveAll(roles2);
//			
//			List<Role3> roles3 = List.of(role5);
//			
//			List<Role3> result3 = this.role3Dao.saveAll(roles3);
//			
			result.forEach(r->{
				System.out.println(r.getName());
			});
			
//			result2.forEach(r->{
//				System.out.println(r.getName());
//			});
//			
//			result3.forEach(r->{
//				System.out.println(r.getName());
//			});
			
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		
	}
	
}
