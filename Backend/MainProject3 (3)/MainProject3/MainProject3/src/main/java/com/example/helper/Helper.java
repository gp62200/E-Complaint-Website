package com.example.helper;


import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class Helper {
	
	@Autowired
	private JavaMailSender javamailsender;
	
	public void sendEmail(String email,String sub, String message) {
		
		
		SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(email);

        msg.setSubject(sub);
        msg.setText(message);

        javamailsender.send(msg);
	}
	    public String currentDateAndTime() {
	    	Date date = new Date(); 
	    	SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	    	System.out.println(formatter.format(date));
	    	return formatter.format(date);
	    }
}
