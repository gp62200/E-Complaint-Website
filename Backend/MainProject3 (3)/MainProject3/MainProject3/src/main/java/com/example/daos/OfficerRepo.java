package com.example.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.entities.Officer;

public interface OfficerRepo extends JpaRepository<Officer, Integer> {
	
//	@Query(value="select pincode from officer where user_id=?1", nativeQuery=true)
//	List<String> findForPincode(int userid);
	
	
	 @Query(value="select * from complaint \r\n" +
	  "inner join admin on complaint.pincode = admin.pincode\r\n" +
	  "inner join officer on officer.pincode = complaint.pincode\r\n" +
	  "where officer.user_id=?1", nativeQuery=true) List<String> findForPincode(int userid);
	 
	 

}
