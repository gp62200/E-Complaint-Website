package com.example.controllers;

import java.util.LinkedHashMap;
import java.util.Random;
import java.util.stream.IntStream;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.server.Session;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.daos.UserDao;
import com.example.entities.User;
import com.example.helper.Helper;
import com.example.models.ResponseDTO;
import com.example.services.UserServices;

import ch.qos.logback.core.net.SyslogOutputStream;

@RestController
@CrossOrigin
@RequestMapping("/")
public class LoginAndRegisterController {
	
	@Autowired
	private UserServices userservice;
	
	@Autowired
	private UserDao userdao;
	
	@Autowired
	Helper helper= new Helper();
	
	@Autowired
    private JavaMailSender javaMailSender;
	
	Random random= new Random();
    
	
	
	
	@PostMapping("/login")
	public ResponseEntity<?> getUserDetails(@RequestBody User user) {
		System.out.println("in get user dtls " + user.getEmail()+user.getPassword());
	try{
			User userauth=userservice.auth(user.getEmail(), user.getPassword());
			System.out.println("user"+userauth);
			if(userauth==null) {
				ResponseDTO response= new ResponseDTO("please insert valid Email and Password");
				return new ResponseEntity<>(response,
						HttpStatus.NOT_FOUND);
				//return new ResponseEntity<>("", HttpStatus.INTERNAL_SERVER_ERROR);
			}
			else {
				userauth.setPassword("***");
				//session.setAttribute("user", userauth);
				//return  ResponseEntity.ok(userauth);}
				
				ResponseDTO response= new ResponseDTO("success",userauth);
			return  ResponseEntity.ok(response);
			}
		}catch (Exception e) {
			System.out.println(e.getMessage());
			ResponseDTO response= new ResponseDTO("something went wrong");
			return new ResponseEntity<>(response,
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
//	@PostMapping("/register")
//	public ResponseEntity<?> registerUser(@RequestBody User user) {
//		
//			
//			System.out.println(user);
//			return new ResponseEntity<>("error",HttpStatus.INTERNAL_SERVER_ERROR);
//		
//	}
	
	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody User user) {
				
		if(userservice.authUserDetls(user.getPincode(), user.getaddharNo()) == false) {
			ResponseDTO response= new ResponseDTO("your adhar details and pincode you have entered is mismatched");
			return new ResponseEntity<>(response,HttpStatus.NOT_FOUND);
//			 return new ResponseEntity<>("your adhar details and pincode you have entered is mismatched",
//					HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		System.out.println("in get user dtls "+user);
		try{
			if(userdao.findByEmail(user.getEmail()) == null) {
				if(userdao.findByAddharNo(user.getaddharNo()) == null) {
					User usersaved=userservice.registerUser(user);
					usersaved.setPassword("**");
					if(usersaved != null) {
						String subject = "Registration Update";
						
						String message = "Dear Sir/Ma'am, \n      You have successfully registered with e-complaint forum. you can provide your complaints by login in to our portal.";
						//+                  "\n Department Name: "+savedComplaint.getDept() +"\n Complaint Description: "
						//		          +savedComplaint.getDescription()+"\n Date and Time: "+savedComplaint.getComplaintDate();
						
						try {
							helper.sendEmail(user.getEmail(),subject, message);
						} catch (Exception e) {
							e.printStackTrace();
						}
						ResponseDTO response= new ResponseDTO("successfully Registered");
					return  ResponseEntity.ok(response);
						//return ResponseEntity.ok("success");
					}
					else
						throw new Exception();
				}else {
					ResponseDTO response= new ResponseDTO("addhar no already exist");
					return new ResponseEntity<>(response,HttpStatus.NOT_FOUND);
					//return  new ResponseEntity<>("error", HttpStatus.INTERNAL_SERVER_ERROR);
				}
			}else {
				ResponseDTO response= new ResponseDTO("email already exist");
				return new ResponseEntity<>(response,HttpStatus.NOT_FOUND);
				//return  new ResponseEntity<>("email", HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}catch (Exception e) {
			ResponseDTO response= new ResponseDTO("something went wrong");
			return new ResponseEntity<>(response,HttpStatus.INTERNAL_SERVER_ERROR);
			//return new ResponseEntity<>("error",
					//HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
		static String onetp ;
		@PostMapping("/sendotp")
		public ResponseEntity<?> sendotp (@RequestBody User email, HttpSession r) {
			r.setMaxInactiveInterval(300);  //3
			System.out.println(email);
	        try {
	        	User user1 =userdao.findByEmail(email.getEmail());
	        	System.out.println(user1);
	        	if(user1==null) {
					return  new ResponseEntity<>("enter valid email", HttpStatus.INTERNAL_SERVER_ERROR);
	        	}
	        	else {
	        		
	        		Random random= new Random();
	        		int otp=100000+random.nextInt(888888);
	        		String sessionId = r.getId();
	        		System.out.println(sessionId);
	        		onetp = Integer.toString(otp);
//	        		r.setAttribute("user",user);
//	        		r.setAttribute("onetp",otp);
	        		r.setMaxInactiveInterval(300);
	        		System.out.println(otp);
				SimpleMailMessage msg = new SimpleMailMessage();
				msg.setTo(email.getEmail());

				msg.setSubject("Testing from Spring Boot");
				msg.setText("otp for resetting password is "+otp+"\n do not share it with anyone");

				javaMailSender.send(msg);
				ResponseDTO response= new ResponseDTO("otp sent successfully");
				return  ResponseEntity.ok(response);
				//return ResponseEntity.ok("success");
	        	}
			} catch (MailException e) {
				
				e.printStackTrace();
				ResponseDTO response= new ResponseDTO("something went wrong");
				return new ResponseEntity<>(response,HttpStatus.INTERNAL_SERVER_ERROR);
				//return  new ResponseEntity<>("error", HttpStatus.INTERNAL_SERVER_ERROR);
			}
		
		}
		
		@PostMapping("/verifyotp")
		public boolean  verifyotp (@RequestParam String obj, String user) {
			//System.out.println(obj.toString());
			
//			System.out.println(id);
//			user1.setMaxInactiveInterval(300);
			String otp1 = obj;
			System.out.println(otp1);
//			System.out.println((obj).get(onetp));
			//System.out.println((LinkedHashMap) obj).get("otp"));
//			int otp1=Integer.parseInt((String) ((LinkedHashMap) obj).get("otp"));
	        try {
	        	//String o=(String) r.getAttribute("onetp");
	        	
	        	if(onetp.equals(otp1)) {
	        		System.out.println("inside");
	        		ResponseDTO response = new ResponseDTO();
	        		response.setResult("Successfully Login");
	        		response.setStatus(true);
	         		System.out.println(response.isStatus());
	        		User user1=(User)userdao.findByEmail(user);
	        		//String id = (String)user1.getId();
	        		//r.invalidate();
	        		user1.setPassword("**");
	        		//ResponseDTO response= new ResponseDTO("success",user);
					//return  ResponseEntity.ok(response);
	        		//return ResponseEntity.ok(user);
	        		return response.isStatus();
	        	}
	        	else {
	        		ResponseDTO response = new ResponseDTO();
	        		response.setResult("Please enter correct password");
	        		response.setStatus(false);
	        		System.out.println(response.isStatus());
					//return new ResponseEntity<>(response,HttpStatus.INTERNAL_SERVER_ERROR);
					//return  new ResponseEntity<>("otp", HttpStatus.INTERNAL_SERVER_ERROR);
	        		return response.isStatus();
	        	}
	       
			} catch (MailException e) {
				
				e.printStackTrace();
				ResponseDTO response= new ResponseDTO();
				response.setResult("Something went wrong");
				response.setStatus(false);
				//return new ResponseEntity<>(response,HttpStatus.INTERNAL_SERVER_ERROR);
				//  new ResponseEntity<>("error", HttpStatus.INTERNAL_SERVER_ERROR);

			//ResponseDTO response= new ResponseDTO("error");
			//return new ResponseEntity<>(response,HttpStatus.INTERNAL_SERVER_ERROR);
			return response.isStatus();
			}
		
		}
		
		@PostMapping("/resetpassword")
		public boolean reset (@RequestParam String newpassword, String email){

			PasswordEncoder passwordEncoder;
			
			System.out.println(email);
			System.out.println(newpassword);
			
			 try {
				 	ResponseDTO response= new ResponseDTO();
				
				 	User user1=(User)userdao.findByEmail(email);

					response.setStatus(true);
					passwordEncoder= new BCryptPasswordEncoder();
					user1.setPassword(passwordEncoder.encode(newpassword));
					//user1.setPassword(newpassword);
					userdao.save(user1);
					System.out.println("Successfully changed password");
					
					
					response.setResult("Successfully changed password");
					return response.isStatus();
					
			 }
			 catch (MailException e) {					
					e.printStackTrace();
					ResponseDTO response= new ResponseDTO();
					response.setResult("Something went wrong");
					response.setStatus(false);
				return response.isStatus();
			}
		}
		
		
		
		
//			
//	        try {
//	        	System.out.println((String) ((LinkedHashMap) obj).get("password"));
//	        	User user=(User)r.getAttribute("user");
//	        	userservice.restpassword(user,(String) ((LinkedHashMap) obj).get("password"));
//	        	ResponseDTO response= new ResponseDTO("success changed password");
//				return  ResponseEntity.ok(response);
//	            //return ResponseEntity.ok("success");
//			}catch (MailException e) {
//				e.printStackTrace();
//				ResponseDTO response= new ResponseDTO("something went wrong");
//				return new ResponseEntity<>(response,HttpStatus.INTERNAL_SERVER_ERROR);
//				//return  new ResponseEntity<>("error", HttpStatus.INTERNAL_SERVER_ERROR);
//			}
//		}	

}