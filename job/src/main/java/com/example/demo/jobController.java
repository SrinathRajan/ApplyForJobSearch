package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class jobController {

	@Autowired
	  jobRepository serviceRepository;
	@Autowired
	   jobService service;
	 
	 @GetMapping("/getvalues")
	   List<job> getList(){
		 return serviceRepository.findAll();
	 }
	 @PostMapping("/post")
	  public job create(@RequestBody job t) {
		 return serviceRepository.save(t);
	 }
	 
	 @GetMapping("/getvalues/{id}")
	 public Optional<job> getbyid(@PathVariable int id){
		
		return service.getDetail(id);
	 }
	 
	 @PutMapping("/task")
	 public String update(@RequestBody job t) {
		 return service.updateDetails(t);
	 }
	 
	 
	 @DeleteMapping("/task")
	 public String delete(@RequestParam int id) {
		 return service.deleteDetails(id);
	 }
	 
}