package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class job {
	@Id
	private int id;
	private String name;
	private String gender;
	private String nationality;
	private String address;
	private String edu_qual;
	private long phone_no;
	private String email_id;
	private String status;
	private String paper_presentation;
	private String intrenships;
	private String workshops;
	private String online_courses;
	private String skills;
	private String other_achievments;
	private String languages_known;
	public job(int id, String name, String gender, String nationality, String address, String edu_qual, long phone_no,
			String email_id, String status, String paper_presentation, String intrenships, String workshops,
			String online_courses, String skills, String other_achievments, String languages_known) {
		super();
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.nationality = nationality;
		this.address = address;
		this.edu_qual = edu_qual;
		this.phone_no = phone_no;
		this.email_id = email_id;
		this.status = status;
		this.paper_presentation = paper_presentation;
		this.intrenships = intrenships;
		this.workshops = workshops;
		this.online_courses = online_courses;
		this.skills = skills;
		this.other_achievments = other_achievments;
		this.languages_known = languages_known;
	}
	public job() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getNationality() {
		return nationality;
	}
	public void setNationality(String nationality) {
		this.nationality = nationality;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEdu_qual() {
		return edu_qual;
	}
	public void setEdu_qual(String edu_qual) {
		this.edu_qual = edu_qual;
	}
	public long getPhone_no() {
		return phone_no;
	}
	public void setPhone_no(long phone_no) {
		this.phone_no = phone_no;
	}
	public String getEmail_id() {
		return email_id;
	}
	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getPaper_presentation() {
		return paper_presentation;
	}
	public void setPaper_presentation(String paper_presentation) {
		this.paper_presentation = paper_presentation;
	}
	public String getIntrenships() {
		return intrenships;
	}
	public void setIntrenships(String intrenships) {
		this.intrenships = intrenships;
	}
	public String getWorkshops() {
		return workshops;
	}
	public void setWorkshops(String workshops) {
		this.workshops = workshops;
	}
	public String getOnline_courses() {
		return online_courses;
	}
	public void setOnline_courses(String online_courses) {
		this.online_courses = online_courses;
	}
	public String getSkills() {
		return skills;
	}
	public void setSkills(String skills) {
		this.skills = skills;
	}
	public String getOther_achievments() {
		return other_achievments;
	}
	public void setOther_achievments(String other_achievments) {
		this.other_achievments = other_achievments;
	}
	public String getLanguages_known() {
		return languages_known;
	}
	public void setLanguages_known(String languages_known) {
		this.languages_known = languages_known;
	}
	
	
	
}