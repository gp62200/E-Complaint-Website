package com.example.daos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.entities.Complaint;

public interface ComplaintDao extends JpaRepository<Complaint, Integer>{
	
	List<Complaint> findByUserId(String userId);
	
//	@Query(value="select * from complaint where user_id=?1", nativeQuery=true)
//	List<Complaint> findbyUserId(String userId);
//	
	//Complaint getComplaint(String deptName, String description, String date );
	
//	Complaint getAllComplaints();
	
	@Query(value="select * from complaint where pincode=?1", nativeQuery=true)
	Complaint findbypincode(long pin);

	@Query(value="select * from complaint where pincode=any(?1)", nativeQuery=true)
	List<Complaint> findForComplaints(List<String> pincodes);
	
	@Query(value="select * from complaint where pincode=any(select pincode from admin where user_id=?1) and acknowledgement is null", nativeQuery=true)
	List<Complaint> findForComplaints(int pincodes);

	@Query(value="select * from complaint where pincode=any(select pincode from admin where user_id=?1) and acknowledgement='accepted'", nativeQuery=true)
	List<Complaint> findForAccComplaints(int parseInt);
	
	@Query(value="select * from complaint \r\n"
			+ "inner join admin on complaint.pincode = admin.pincode\r\n"
			+ "inner join officer on officer.pincode = complaint.pincode\r\n"
			+ "where officer.user_id =?1 and complaint.acknowledgement='accepted'", nativeQuery=true)
	List<Complaint> findForAcceptedComplaints(int parseInt);
	
	@Query(value="select * from complaint where pincode=any(select pincode from admin where user_id=?1) and acknowledgement='rejected'", nativeQuery=true)
	List<Complaint> findForRejComplaints(int parseInt);
	
	
	@Query(value="select * from complaint \r\n"
			+ "inner join admin on complaint.pincode = admin.pincode\r\n"
			+ "inner join officer on officer.pincode = complaint.pincode\r\n"
			+ "where officer.user_id =?1 and complaint.status='completed'", nativeQuery=true)
	List<Complaint> findForComComplaints(int parseInt);
	
	
	

}
