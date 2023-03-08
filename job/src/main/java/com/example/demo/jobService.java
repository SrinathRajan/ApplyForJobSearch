package com.example.demo;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class jobService {

	@Autowired
	jobRepository repository;
		public Optional<job> getDetail(int id){
			return repository.findById(id);
		}

		public String updateDetails(job t) {
			repository.save(t);
			return "updated";
		}

		public String deleteDetails(int id) {
			repository.deleteById(id);
			return "Id deleted";
		}
}