package com.floodmanagement.floodmanagement.model;


import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.persistence.CascadeType;
import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity 					//for JPA to know this is entiy and to create tabe name Victim in sql
public class Victim implements UserDetails{
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO) //automatic gernrateing id for new entry
	private long id;
	private String vfirstName;
	private String vlastName;
	private String vMobno;
	private String vAddress;
	private String vCity;
	@Column(nullable=false)
	private String vEmail;
	private String username;
	private String password;
	
	//for removing error for serirelizable classs
	private static final long serialVersionUID = 1L;
	
	
	
	public Victim() {}  //default const compiler will not add
	
	
	
	


	public Victim(long id, String vfirstName, String vlastName, String vMobno, String vAddress, String vCity,
			String vEmail, String username, String password) {
		super();
		this.id = id;
		this.vfirstName = vfirstName;
		this.vlastName = vlastName;
		this.vMobno = vMobno;
		this.vAddress = vAddress;
		this.vCity = vCity;
		this.vEmail = vEmail;
		this.username = username;
		this.password = password;
	}

	




	public long getId() {
		return id;
	}






	public void setId(long id) {
		this.id = id;
	}






	public String getVfirstName() {
		return vfirstName;
	}






	public void setVfirstName(String vfirstName) {
		this.vfirstName = vfirstName;
	}






	public String getVlastName() {
		return vlastName;
	}






	public void setVlastName(String vlastName) {
		this.vlastName = vlastName;
	}






	public String getvMobno() {
		return vMobno;
	}






	public void setvMobno(String vMobno) {
		this.vMobno = vMobno;
	}






	public String getvAddress() {
		return vAddress;
	}






	public void setvAddress(String vAddress) {
		this.vAddress = vAddress;
	}






	public String getvCity() {
		return vCity;
	}






	public void setvCity(String vCity) {
		this.vCity = vCity;
	}






	public String getvEmail() {
		return vEmail;
	}






	public void setvEmail(String vEmail) {
		this.vEmail = vEmail;
	}






	public void setUsername(String username) {
		this.username = username;
	}






	public void setPassword(String password) {
		this.password = password;
	}






	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinTable(name="victim_role",
	joinColumns  = @JoinColumn(name="victim",referencedColumnName="id"),
	inverseJoinColumns = @JoinColumn(name="role", referencedColumnName="id")
			)
	private Set<Role> roles=new HashSet<>();



	
	
	
	
	
	public Set<Role> getRoles() {
		return roles;
	}






	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}






	//Implements the UserDeails Interface Mehtods
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		
		List<SimpleGrantedAuthority> auhorities= this.roles.stream().map((role)-> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
		return auhorities;
	}


	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return this.password;
	}


	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return this.username;
	}


	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}


	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}


	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}


	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}


	
	
}
