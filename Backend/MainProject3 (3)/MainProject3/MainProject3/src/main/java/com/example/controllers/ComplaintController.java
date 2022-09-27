package com.example.controllers;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.daos.ComplaintDao;
import com.example.daos.UserDao;
import com.example.entities.Complaint;
import com.example.entities.User;
import com.example.helper.Helper;
import com.example.services.ComplaintActions;


@RestController
@CrossOrigin
@RequestMapping("/")
public class ComplaintController {
	
	@Autowired
	private ComplaintActions complaintaction;
	
	@Autowired
	private ComplaintDao complaintdao;
	
	@Autowired
	private UserDao userdao;
	
	@Autowired
	Helper helper= new Helper();
	
	@PostMapping("/registercomplaint")
	public ResponseEntity<?> getComplaint(@RequestBody Complaint complaint){
		System.out.println("complaint details"+complaint);
		User user =userdao.findByUserId(Integer.parseInt(complaint.getUserId()));
		complaint.setPincode(user.getPincode());
		complaint.setComplaintDate(helper.currentDateAndTime());
		Complaint savedComplaint = complaintaction.registerComplaint(complaint);
			
			if(savedComplaint!=null) {
				String subject = "Complaint Update";
				
				String message = "Dear Sir/Ma'am, \n      Your complaint is registered successfully with the complaint details as below:"+
				                  "\n Department Name: "+savedComplaint.getDept() +"\n Complaint Description: "
						          +savedComplaint.getDescription()+"\n Date and Time: "+savedComplaint.getComplaintDate();
				
				try {
					helper.sendEmail(user.getEmail(),subject, message);
				} catch (Exception e) {
					e.printStackTrace();
				}
				return ResponseEntity.ok("Complaint registered successful");
			}else
		//return ResponseEntity.ok("Something went wrong");
				return new ResponseEntity<>("something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
			
	}
		
	@PostMapping("/viewusercomplaints")
	public ResponseEntity<?> viewComplaint(@RequestBody String userId){
		String str = userId.substring(0,userId.length()-1);
		try {
			System.out.println(str);
			List<Complaint> getcompls = complaintdao.findByUserId(str);
			System.out.println(getcompls);
			return ResponseEntity.ok(getcompls);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>("something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
		
	}
	
	@PostMapping("/cancelcomplaint")
	public ResponseEntity<?> cancelComplaint(@RequestBody String Id){
		System.out.println(Id);
		String s=Id.substring(0,Id.length()-1);
		try {
			complaintdao.deleteById(Integer.parseInt(s));
			return ResponseEntity.ok("Deleted successfully");
		} catch (Exception e) {
			return new ResponseEntity<>("Something went wrong",HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
		
	}	
}

