package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

import com.example.daos.AdminRepository;
import com.example.daos.ComplaintDao;


@SpringBootApplication(exclude= SecurityAutoConfiguration.class )
public class MainProjectApplication {
	
			//select * from admin join complaint on complaint.pincode = admin.pincode where admin.user_id=1;



	public static void main(String[] args) {
		SpringApplication.run(MainProjectApplication.class, args);
		
		
	}

}
