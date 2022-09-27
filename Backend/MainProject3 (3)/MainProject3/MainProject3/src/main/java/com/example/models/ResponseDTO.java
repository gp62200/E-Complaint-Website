package com.example.models;

import com.example.entities.User;

import lombok.Data;

@Data
public class ResponseDTO<T> {
	
	private String result;
	private User user;
	private boolean status;
	

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public ResponseDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public ResponseDTO(String result) {
		super();
		this.result = result;
	}

	public ResponseDTO(String result, User user) {
		super();
		this.result = result;
		this.user = user;
	}

	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "ResponseDTO [result=" + result + ", user=" + user + "]";
	}
	
}