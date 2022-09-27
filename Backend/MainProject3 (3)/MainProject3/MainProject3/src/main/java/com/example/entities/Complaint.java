package com.example.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="complaint")
public class Complaint {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="complaint_id")
	private int complaintId ;
	
	@Column(name="pincode")
	private String pincode;
	
	@Column(name="user_id")
	private String userId ;
	
	@Column(name="description")
	private String description ;
	
	@Column(name="dept")
	private String dept ;
	
	@Column(name="extra_comment")
	private String extraComment;
	
	@Column(name="complaint_date")
	private String complaintDate ;
	
	@Column(name="acknowledgement")
	private String acknowledgement ;
	
	@Column(name="reject_reason")
	private String rejectReason ;	
	
	@Column(name="status")
	private String complaintStatus;
	
	/*
	 * @Column(name="city") private String city ;
	 * 
	 * @Column(name="state") private String state ;
	 */
	public Complaint() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Complaint(int complaintId, String pincode, String userId, String description, String dept,
			String extraComment, String complaintDate, String acknowledgement, String rejectReason, String city,
			String state, String complaintStatus) {
		super();
		this.complaintId = complaintId;
		this.pincode = pincode;
		this.userId = userId;
		this.description = description;
		this.dept = dept;
		this.extraComment = extraComment;
		this.complaintDate = complaintDate;
		this.acknowledgement = acknowledgement;
		this.rejectReason = rejectReason;
		this.complaintStatus=complaintStatus;
		//this.city = city;
		//this.state = state;
	}

	public Complaint(String pincode, String userId, String description, String dept, String extraComment,
			String complaintDate, String acknowledgement, String rejectReason, String city, String state, String complaintStatus) {
		super();
		this.pincode = pincode;
		this.userId = userId;
		this.description = description;
		this.dept = dept;
		this.extraComment = extraComment;
		this.complaintDate = complaintDate;
		this.acknowledgement = acknowledgement;
		this.rejectReason = rejectReason;
		this.complaintStatus=complaintStatus;
		//this.city = city;
		//this.state = state;
	}

	public int getComplaintId() {
		return complaintId;
	}

	public void setComplaintId(int complaintId) {
		this.complaintId = complaintId;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDept() {
		return dept;
	}

	public void setDept(String dept) {
		this.dept = dept;
	}

	public String getExtraComment() {
		return extraComment;
	}

	public void setExtraComment(String extraComment) {
		this.extraComment = extraComment;
	}

	public String getComplaintDate() {
		return complaintDate;
	}

	public void setComplaintDate(String complaintDate) {
		this.complaintDate = complaintDate;
	}

	public String getAcknowledgement() {
		return acknowledgement;
	}

	public void setAcknowledgement(String acknowledgement) {
		this.acknowledgement = acknowledgement;
	}

	public String getRejectReason() {
		return rejectReason;
	}

	public void setRejectReason(String rejectReason) {
		this.rejectReason = rejectReason;
	}
	
	public String getComplaintStatus() {
		return complaintStatus;
	}
	
	public void setComplaintStatus(String complaintStatus) {
		this.complaintStatus = complaintStatus;
	}
	/*
	 * public String getCity() { return city; }
	 * 
	 * public void setCity(String city) { this.city = city; }
	 * 
	 * public String getState() { return state; }
	 * 
	 * public void setState(String state) { this.state = state; }
	 */

	@Override
	public String toString() {
		return "Complaint [complaintId=" + complaintId + ", pincode=" + pincode + ", userId=" + userId
				+ ", description=" + description + ", dept=" + dept + ", extraComment=" + extraComment
				+ ", complaintDate=" + complaintDate + ", acknowledgement=" + acknowledgement + ", rejectReason="
				+ rejectReason + ", complaintStatus=" + complaintStatus + "]";
	}

	public Complaint(String userId, String description, String dept, String extraComment, String complaintDate) {
		super();
		this.userId = userId;
		this.description = description;
		this.dept = dept;
		this.extraComment = extraComment;
		this.complaintDate = complaintDate;
	}
	
	
}
	