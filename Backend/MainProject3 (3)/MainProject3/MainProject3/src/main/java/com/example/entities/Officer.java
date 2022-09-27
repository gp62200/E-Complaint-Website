package com.example.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="officer")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Officer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int officer_id;
	//private String officer_name;
	private String pincode;
	@Column(name="user_id")
	private int userId ;
	
	

}
