package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.daos.AdminRepository;
import com.example.daos.ComplaintDao;
import com.example.daos.UserDao;
import com.example.entities.Complaint;

public class AdminServicesImpl implements AdminServices {
	@Autowired
	private UserDao userRepository;
	
	@Autowired
	private ComplaintDao complaintRepository;
	
	@Autowired
	private AdminRepository adminDao;

	@Override
	public List<String> getPincode(int userid) {
		List<String> pincodes=adminDao.findForPincode(userid);
		return pincodes;
	}

	@Override
	public List<Complaint> getComplains(List<String> pincodes) {
		//List<Complaint> complaints= complaintRepository.findForComplaints(pincodes);
		//return complaints;
		return null;
	}

}
