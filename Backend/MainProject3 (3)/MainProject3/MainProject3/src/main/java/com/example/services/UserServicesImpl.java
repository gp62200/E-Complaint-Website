package com.example.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.daos.CityDao;
import com.example.daos.UserDao;
import com.example.entities.CityData;
import com.example.entities.User;

@Service
@Transactional
public class UserServicesImpl implements UserServices {
	@Autowired
	UserDao userdao;
	
	@Autowired
	CityDao citydao;
	
	
	PasswordEncoder passwordEncoder;

	@Override
	public User registerUser(User user) {
		user.setUserRole("normal");
		
		passwordEncoder= new BCryptPasswordEncoder();
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		User userSaved= userdao.save(user);
		return userSaved;
	}

	@Override
	public User auth(String email, String password) {
		//System.out.println("Nisha");
		User user = userdao.findByEmail(email);
		System.out.println("user ===="+user);
		//String epassword= passwordEncoder.encode(password);
		//System.out.println(epassword);
		//if(user != null && epassword.equals(user.getPassword())) {
		//passwordEncoder.matches(password,user.getPassword()
		passwordEncoder= new BCryptPasswordEncoder();
		if(user != null && passwordEncoder.matches(password,user.getPassword())) {
		//if(cust != null && passwordEncoder.matches(password, cust.getPassword())) {
			System.out.println(user);
			return user;}
		return null;
	}
	
	

	@Override
	public User restpassword(User user, String password) {
		User userupdate= userdao.findByEmail(user.getEmail());
		passwordEncoder= new BCryptPasswordEncoder();
		userupdate.setPassword(passwordEncoder.encode(password));
		User userSaved= userdao.save(userupdate);
		return userSaved;
	}
	@Override
	public Boolean authUserDetls(String pincode, String adharId) {
		try {
		CityData citydata = citydao.findByAdharId(adharId);
		if(pincode.equals(citydata.getPincode()) &&  adharId.equals(citydata.getAdharId())){
			return true;
		}else {
		return false;
		}
		}catch (Exception e) {
			return false;
		}
	}
	



}
