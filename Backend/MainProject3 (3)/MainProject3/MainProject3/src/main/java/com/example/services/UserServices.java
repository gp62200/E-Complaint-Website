package com.example.services;

import com.example.entities.User;

public interface UserServices {

	User registerUser(User user);
	User auth(String email, String password);
	
	User restpassword(User user, String password);
	Boolean authUserDetls(String pincode, String addhar_no);
	
}
