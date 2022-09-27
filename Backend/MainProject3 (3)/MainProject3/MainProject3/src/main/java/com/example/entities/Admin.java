package com.example.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="admin")
public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
//	@OneToMany(mappedBy="userId")
//	@JsonIgnore
//	@Column(name = "user_id")
//	private User userId;

	@Column(name = "user_id")
	private int userId;
	@Column(name = "pincode",length = 6)
	private String pincode;
	
	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Admin( int userId, String pincode) {
		super();
		
		this.userId = userId;
		this.pincode = pincode;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	@Override
	public String toString() {
		return "Admin [id=" + id + ", userId=" + userId + ", pincode=" + pincode + "]";
	}

	
		
	
	
	
	
	
	
}
