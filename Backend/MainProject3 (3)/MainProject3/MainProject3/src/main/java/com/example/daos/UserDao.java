package com.example.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.entities.User;

public interface UserDao extends JpaRepository<User, Integer> {
	

	User findByEmail(String email);

	User findByAddharNo(String addharNo);

	User findByUserId(int parseInt);

	

	//@Query(value="UPDATE mainproject1.user SET password =?1 WHERE (user_id = ?2)", nativeQuery=true)
	//User updateUser(String password, int user_id);
}
