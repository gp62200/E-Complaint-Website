package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.daos.OfficerRepo;
import com.example.entities.Complaint;

public class OfficerServicesImpl implements OfficerServices {
	
	@Autowired
	private OfficerRepo officerDao;

	@Override
	public List<String> getPincode(int userid) {
		// TODO Auto-generated method stub
		List<String> pincodes=officerDao.findForPincode(userid);
		return pincodes;
	}

	@Override
	public List<Complaint> getComplains(List<String> pincodes) {
		// TODO Auto-generated method stub
		return null;
	}

}
