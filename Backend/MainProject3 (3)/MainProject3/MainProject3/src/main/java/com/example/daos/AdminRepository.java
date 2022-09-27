package com.example.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.entities.Admin;


public interface AdminRepository extends JpaRepository<Admin, Integer>{
	
	
	@Query(value="select pincode from admin where user_id=?1", nativeQuery=true)
	List<String> findForPincode(int userid);
}
