package com.example.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="city_data")
public class CityData {
	
	
	@Column(name="pincode")
	private String pincode;
	
	@Id
	@Column(name="addhar_no")
	private String adharId;

	@Override
	public String toString() {
		return "CityData [pincode=" + pincode + ", adharId=" + adharId + "]";
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public String getAdharId() {
		return adharId;
	}

	public void setAdharId(String adharId) {
		this.adharId = adharId;
	}

	public CityData(String pincode, String adharId) {
		super();
		this.pincode = pincode;
		this.adharId = adharId;
	}

	public CityData() {
		super();
	}
	
}
