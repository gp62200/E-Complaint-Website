package com.example.models;

import com.example.entities.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Data
@ToString
public class ComplaintRequest {

	private User user;

	public ComplaintRequest() {
		super();
		// TODO Auto-generated constructor stub
	}


	public ComplaintRequest(User user) {
		super();
		this.user = user;
	}


	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}


	@Override
	public String toString() {
		return "ComplaintRequest [user=" + user + "]";
	}

	

	
}
