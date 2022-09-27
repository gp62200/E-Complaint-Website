package com.example.services;

import java.util.List;

import com.example.entities.Complaint;

public interface ComplaintActions {
	
	Complaint registerComplaint(Complaint complaint);
	
	//Complaint getComplaint(String description,String department, String date);
	
	List<Complaint> getAllComplaints(Complaint complaint);
	 Complaint getComplaint(int id);
}
