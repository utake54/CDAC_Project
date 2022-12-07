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
public class NgoOrganization implements UserDetails{
		
	/**
	 * 
	 */

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String oType;
	private String oName;
	private String oAuthName;
	private String oMobNo;
	private String oAddress;
	private String oCity;
	private String oEmail;
	private String oRegisNo;
	private String oUrl;
	private String username;
	private String password;

	
	public NgoOrganization() {}


	public NgoOrganization(long id, String oType, String oName, String oAuthName, String oMobNo, String oAddress,
			String oCity, String oEmail, String oRegisNo, String oUrl, String username, String password) {
		super();
		this.id = id;
		this.oType = oType;
		this.oName = oName;
		this.oAuthName = oAuthName;
		this.oMobNo = oMobNo;
		this.oAddress = oAddress;
		this.oCity = oCity;
		this.oEmail = oEmail;
		this.oRegisNo = oRegisNo;
		this.oUrl = oUrl;
		this.username = username;
		this.password = password;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getoType() {
		return oType;
	}


	public void setoType(String oType) {
		this.oType = oType;
	}


	public String getoName() {
		return oName;
	}


	public void setoName(String oName) {
		this.oName = oName;
	}


	public String getoAuthName() {
		return oAuthName;
	}


	public void setoAuthName(String oAuthName) {
		this.oAuthName = oAuthName;
	}


	public String getoMobNo() {
		return oMobNo;
	}


	public void setoMobNo(String oMobNo) {
		this.oMobNo = oMobNo;
	}


	public String getoAddress() {
		return oAddress;
	}


	public void setoAddress(String oAddress) {
		this.oAddress = oAddress;
	}


	public String getoCity() {
		return oCity;
	}


	public void setoCity(String oCity) {
		this.oCity = oCity;
	}


	public String getoEmail() {
		return oEmail;
	}


	public void setoEmail(String oEmail) {
		this.oEmail = oEmail;
	}


	public String getoRegisNo() {
		return oRegisNo;
	}


	public void setoRegisNo(String oRegisNo) {
		this.oRegisNo = oRegisNo;
	}


	public String getoUrl() {
		return oUrl;
	}


	public void setoUrl(String oUrl) {
		this.oUrl = oUrl;
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
		return "NgoOrganization [id=" + id + ", oType=" + oType + ", oName=" + oName + ", oAuthName=" + oAuthName
				+ ", oMobNo=" + oMobNo + ", oAddress=" + oAddress + ", oCity=" + oCity + ", oEmail=" + oEmail
				+ ", oRegisNo=" + oRegisNo + ", oUrl=" + oUrl + ", username=" + username + ", password=" + password
				+ "]";
	}

	
	
	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinTable(name="orgs_role",
	joinColumns  = @JoinColumn(name="orgs",referencedColumnName="id"),
	inverseJoinColumns = @JoinColumn(name="role", referencedColumnName="id")
			)
	private Set<Role> roles2=new HashSet<>();



	
	
	
	
	
	public Set<Role> getRoles() {
		return roles2;
	}






	public void setRoles(Set<Role> roles2) {
		this.roles2 = roles2;
	}





	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		List<SimpleGrantedAuthority> auhorities= this.roles2.stream().map((role)-> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
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


	public NgoOrganization orElseThrow(Object object) {
		// TODO Auto-generated method stub
		return null;
	}

	
	
}
