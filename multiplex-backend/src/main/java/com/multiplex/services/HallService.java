package com.multiplex.services;

import java.util.List;
import java.util.Set;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.multiplex.dtos.HallCapacityDTO;
import com.multiplex.models.Hall;
import com.multiplex.models.HallCapacity;
import com.multiplex.repos.HallCapacityRepository;
import com.multiplex.repos.HallRepository;

@Service
public class HallService {
	@Autowired private HallRepository repo;
	@Autowired private HallCapacityRepository hcrepo;
	@Autowired private SeatTypeService sservice;
	
	public void saveCapacity(HallCapacityDTO dto) {
		HallCapacity hc=new HallCapacity();
		BeanUtils.copyProperties(dto, hc);
		hc.setSeatType(sservice.findById(dto.getSeatTypeId()));
		Hall hall=repo.getById(dto.getHallId());
		hc.setHall(hall);
		
		HallCapacity hcc= hcrepo.save(hc);
		List<HallCapacity> hcs= hall.getHallcapacity();
		hcs.add(hcc);
		hall.setHallcapacity(hcs);
		repo.save(hall);
	}
	
	public void deleteSeat(int id) {
		HallCapacity hc=hcrepo.getById(id);
		Hall hall=hc.getHall();
		List<HallCapacity> hcs= hall.getHallcapacity();
		hcs.remove(hc);
		repo.save(hall);
		hcrepo.delete(hc);
	}

	public void save(Hall hall) {
		repo.save(hall);
	}

	public List<Hall> listall(){
		return repo.findAll();
	}

	public Hall findById(int id) {
		return repo.getById(id);
	}

	public void deleteHall(int id) {
		repo.delete(repo.getById(id));
	}
}
