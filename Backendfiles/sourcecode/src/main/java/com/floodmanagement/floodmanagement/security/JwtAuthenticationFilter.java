package com.floodmanagement.floodmanagement.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;


@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
	
	@Autowired
	@Qualifier(value = "myUserDetailsService")
	private UserDetailsService userDetailsService;
	
	@Autowired
	@Qualifier(value = "myUserDetailsService2")
	private UserDetailsService userDetailsService2;

	@Autowired
	private JwtTokenHelper jwtTokenHelper;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		// 1. get token
		String requestToken = request.getHeader("Authorization");
		// Bearer 12313sadakjad
		
		System.out.println(requestToken);
		
		String username=null;
		
		String token=null;
		
		if(requestToken!=null && requestToken.startsWith("Bearer")) {
			
			 token = requestToken.substring(7);
			 
			 try {
				 username = this.jwtTokenHelper.getUsernameFromToken(token);

			 }catch(IllegalArgumentException e) {
				 System.out.println("Unable to get jwt token");
			 }catch(ExpiredJwtException e) {
				 System.out.println("jwt token has expired");

			 }catch(MalformedJwtException e) {
				 System.out.println("Invalid jwt ");

			 }
			
			
		}else {
			System.out.println("JWT token does not begging with Bearer");
		}
		
		// once we get the token, now validate
		
		if(username!=null && SecurityContextHolder.getContext().getAuthentication()==null) {
			
			UserDetails userDetails= this.userDetailsService.loadUserByUsername(username);
			
			if(this.jwtTokenHelper.validateToken(token, userDetails)) {
				//sahi chalra he sab
				//authenticate karna he
				UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities()); 
				usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
			}else {
				System.out.println("Invalid jwt token");
			}
		}else {
			System.out.println("Username is null or context is not null");
		}
		
		filterChain.doFilter(request, response);
	}

}
