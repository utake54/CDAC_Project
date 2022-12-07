package com.floodmanagement.floodmanagement.model;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.persistence.CascadeType;
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

@Entity
public class Volunteer implements UserDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String volFname;
	private String volLname;
	private String volMobNo;
	private String volAddress;
	private String volCity;
	private String volEmail;
	private String volType;
	private String volBloodg;
	private String username;
	private String password;
	
	
	public Volunteer() { }


	public Volunteer(long id, String volFname, String volLname, String volMobNo, String volAddress, String volCity,
			String volEmail, String volType, String volBloodg, String username, String password) {
		super();
		this.id = id;
		this.volFname = volFname;
		this.volLname = volLname;
		this.volMobNo = volMobNo;
		this.volAddress = volAddress;
		this.volCity = volCity;
		this.volEmail = volEmail;
		this.volType = volType;
		this.volBloodg = volBloodg;
		this.username = username;
		this.password = password;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getVolFname() {
		return volFname;
	}


	public void setVolFname(String volFname) {
		this.volFname = volFname;
	}


	public String getVolLname() {
		return volLname;
	}


	public void setVolLname(String volLname) {
		this.volLname = volLname;
	}


	public String getVolMobNo() {
		return volMobNo;
	}


	public void setVolMobNo(String volMobNo) {
		this.volMobNo = volMobNo;
	}


	public String getVolAddress() {
		return volAddress;
	}


	public void setVolAddress(String volAddress) {
		this.volAddress = volAddress;
	}


	public String getVolCity() {
		return volCity;
	}


	public void setVolCity(String volCity) {
		this.volCity = volCity;
	}


	public String getVolEmail() {
		return volEmail;
	}


	public void setVolEmail(String volEmail) {
		this.volEmail = volEmail;
	}


	public String getVolType() {
		return volType;
	}


	public void setVolType(String volType) {
		this.volType = volType;
	}


	public String getVolBloodg() {
		return volBloodg;
	}


	public void setVolBloodg(String volBloodg) {
		this.volBloodg = volBloodg;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	@Override
	public String toString() {
		return "Volunteer [id=" + id + ", volFname=" + volFname + ", volLname=" + volLname + ", volMobNo=" + volMobNo
				+ ", volAddress=" + volAddress + ", volCity=" + volCity + ", volEmail=" + volEmail + ", volType="
				+ volType + ", volBloodg=" + volBloodg + ", username=" + username + ", password=" + password + "]";
	}

	
	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinTable(name="volunteer_role",
	joinColumns  = @JoinColumn(name="vols",referencedColumnName="id"),
	inverseJoinColumns = @JoinColumn(name="role3", referencedColumnName="id")
			)
	private Set<Role> roles3=new HashSet<>();


	public Set<Role> getRoles() {
		return roles3;
	}






	public void setRoles3(Set<Role> roles3) {
		this.roles3= roles3;
	}




	

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		List<SimpleGrantedAuthority> auhorities= this.roles3.stream().map((role)-> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
		return auhorities;
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
