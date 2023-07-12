package com.multiplex.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.multiplex.models.Hall;
import com.multiplex.models.HallCapacity;

@Repository
public interface HallCapacityRepository extends JpaRepository<HallCapacity, Integer> {
	
	List<HallCapacity> findByHall(Hall hall);

}
