package com.multiplex.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.multiplex.models.SeatType;
import com.multiplex.repos.SeatTypeRepository;

@Service
public class SeatTypeService {
	@Autowired private SeatTypeRepository repo;

	public void save(SeatType st) {
		repo.save(st);
	}

	public List<SeatType> listall(){
		return repo.findAll();
	}

	public SeatType findById(int id) {
		return repo.getById(id);
	}

	public void deleteSeatType(int id) {
		repo.delete(repo.getById(id));
	}
}
