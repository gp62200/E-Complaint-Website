package com.example.services;

import java.util.List;

import com.example.entities.Complaint;

public interface AdminServices {
	
	List<String> getPincode(int userid);
	
	List<Complaint> getComplains(List<String> pincodes);
	
	

}
