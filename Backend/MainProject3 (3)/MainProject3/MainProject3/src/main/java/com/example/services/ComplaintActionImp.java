package com.example.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.daos.ComplaintDao;
import com.example.entities.Complaint;

@Service
@Transactional
public class ComplaintActionImp implements ComplaintActions{
	
	@Autowired
	ComplaintDao complaintdao;
	
	@Override
	public Complaint registerComplaint(Complaint complaint) {
		Complaint saveComplaint = complaintdao.save(complaint);
		return saveComplaint;
	}

	public Complaint getComplaint(int id) {
		Complaint saveComplaint = complaintdao.getById(id);
		return saveComplaint;
	}

//	@Override
//	public Complaint getComplaint(String description, String department, String date) {
//		Complaint complaint = complaintdao.getComplaint(department, description,date);
//		return complaint;
//	}


	@Override
	public List<Complaint> getAllComplaints(Complaint complaint) {
		List<Complaint> list = new ArrayList<Complaint>();
		list.add(complaint);
		return list;
	}


	
}
