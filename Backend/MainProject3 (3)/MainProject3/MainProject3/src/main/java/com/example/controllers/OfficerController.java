package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.daos.AdminRepository;
import com.example.daos.ComplaintDao;
import com.example.daos.UserDao;
import com.example.entities.Complaint;
import com.example.entities.User;
import com.example.helper.Helper;
import com.example.services.ComplaintActions;

@CrossOrigin
@RestController
@RequestMapping("/")
public class OfficerController {
	
	
	@Autowired
	private UserDao userRepository;
	
	@Autowired
	private ComplaintDao complaintRepository;
	
	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private ComplaintActions complaintAction;
	
	@Autowired
	private Helper helper;
	
	
	
	
	
	@PostMapping("/viewofficercomplaints/accepted")
	public ResponseEntity<List<Complaint>> getacceptedcomplaints(@RequestBody String userId) {
		try {
			System.out.println(userId);
      //List<String> pincodes= adminRepository.findForPincode(userId);
      //System.out.println(pincodes);
			String s=userId.substring(0,userId.length()-1);
			System.out.println(s);
   List<Complaint> complaints=complaintRepository.findForAcceptedComplaints(Integer.parseInt(s));
   System.out.println(complaints);
			return ResponseEntity.ok(complaints);
		} catch (Exception e) {
			
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	
	
	
	
	@PostMapping("/complete")
	public ResponseEntity<?> updaterejected(@RequestBody Complaint complaintinput) {
  
		try 
		{System.out.println(complaintinput);
				Complaint complaint=complaintAction.getComplaint(complaintinput.getComplaintId());
//				System.out.println(complaintinput.getRejectReason());
				System.out.println(complaint);
//				
				   complaint.setComplaintStatus("completed");
				   complaint.setDept(complaintinput.getDept());
				   User user=userRepository.findByUserId(Integer.parseInt(complaint.getUserId()));
				   helper.sendEmail(user.getEmail(),"Complaint Completion Status", "Hi,\r\n"
				   		+ "\r\n"
				   		+ "Thanks for contacting Municipal Corporation Complaint Portal!\r\n"
				   		+ "\r\n"
				   		+ " Your complaint has been completed by "+complaint.getDept()+"\r\n"
				   		+ "\r\n"
				   		+ "Note:This is an automatically generated email – please do not reply to it.\r\n"
				   		+ "\r\n"
				   		+ "With regards,\r\n"
				   		+ "Officer");
				   complaintRepository.save(complaint);
				   
					return ResponseEntity.ok("success");
				   
				
				   
			} catch (Exception e) {
				return new ResponseEntity<>("somthing went wrong",HttpStatus.INTERNAL_SERVER_ERROR);
				
			}
		}
	
	
	
	
	
	
//	@PostMapping("/complete")
//	public ResponseEntity<?> updatestatus(@RequestBody int complaintId, String dept ) {
//  
//	   try {
//		Complaint complaint=complaintAction.getComplaint(complaintId);
//		   complaint.setComplaintStatus("Complete");
//		   complaint.setDept(dept);
//		   User user=userRepository.findByUserId(Integer.parseInt(complaint.getUserId()));
////		   helper.sendEmail(user.getEmail(),"Complaint Completion Status", "Hi,\r\n"
////		   		+ "\r\n"
////		   		+ "Thanks for contacting Municipal Corporation Complaint Portal!\r\n"
////		   		+ "\r\n"
////		   		+ " Your complaint has been accepted.and forwarded to"+dept+"\r\n"
////		   		+ "\r\n"
////		   		+ "Note:This is an automatically generated email – please do not reply to it.\r\n"
////		   		+ "\r\n"
////		   		+ "With regards,\r\n"
////		   		+ "Officer");
//		   complaintRepository.save(complaint);
//		   
//			return ResponseEntity.ok("success");
//	} catch (Exception e) {
//		return new ResponseEntity<>("something went wrong",HttpStatus.INTERNAL_SERVER_ERROR);
//		
//	}
//	}
	
	
	@PostMapping("/viewofficercomplaints/completed")
	public ResponseEntity<List<Complaint>> getcompletedcomplaints(@RequestBody String userId) {
		try {
			System.out.println(userId);
      //List<String> pincodes= adminRepository.findForPincode(userId);
      //System.out.println(pincodes);
			String s=userId.substring(0,userId.length()-1);
			System.out.println(s);
   List<Complaint> complaints=complaintRepository.findForComComplaints(Integer.parseInt(s));
   System.out.println(complaints);
			return ResponseEntity.ok(complaints);
		} catch (Exception e) {
			
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
