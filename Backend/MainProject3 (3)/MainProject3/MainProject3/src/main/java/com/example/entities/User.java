package com.example.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="user_id")
	private int userId ;
	
	@Column(name="user_role")
	private String userRole;
	
	@Column(name="first_name")
	private String firstName ;
	
	@Column(name="middle_name")
	private String middleName ;
	
	@Column(name="last_name")
	private String lastName ;
	
	@Column(name="gender")
	private String gender;
	
	@Column(name="email")
	private String email ;
	
	@Column(name="mobile_no")
	private String mobileNo ;
	
	@Column(name="password")
	private String password ;

	@Column(name="addharNo")
	private String addharNo ;
	
	@Column(name="landmark")
	private String landmark;
	
	
	
	@Column(name="city")
	private String city ;
	
	@Column(name="state")
	private String state ;
	
	@Column(name="pincode")
	private String pincode;

	public User() {
		
	}

	public User(String firstName, String middleName, String lastName, String gender, String email, String mobileNo,
			String password, String addharNo, String landmark, String city, String state,
			String pincode) {
		super();
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.gender = gender;
		this.email = email;
		this.mobileNo = mobileNo;
		this.password = password;
		this.addharNo = addharNo;
		this.landmark = landmark;
		
		this.city = city;
		this.state = state;
		this.pincode = pincode;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getaddharNo() {
		return addharNo;
	}

	public void setaddharNo(String addharNo) {
		this.addharNo = addharNo;
	}

	public String getLandmark() {
		return landmark;
	}

	public void setLandmark(String landmark) {
		this.landmark = landmark;
	}

	

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public User(int userId, String userRole, String firstName, String middleName, String lastName, String gender,
			String email, String mobileNo, String password, String addharNo, String landmark, String city,
			String state, String pincode) {
		super();
		this.userId = userId;
		this.userRole = userRole;
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.gender = gender;
		this.email = email;
		this.mobileNo = mobileNo;
		this.password = password;
		this.addharNo = addharNo;
		this.landmark = landmark;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userRole=" + userRole + ", firstName=" + firstName + ", middleName="
				+ middleName + ", lastName=" + lastName + ", gender=" + gender + ", email=" + email + ", mobileNo="
				+ mobileNo + ", password=" + password + ", addharNo=" + addharNo + ", landmark=" + landmark
				+ ", city=" + city + ", state=" + state + ", pincode=" + pincode + "]";
	}
	
	
}
