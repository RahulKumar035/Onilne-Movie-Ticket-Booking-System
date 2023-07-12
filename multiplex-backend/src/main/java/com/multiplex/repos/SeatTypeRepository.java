package com.multiplex.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.multiplex.models.SeatType;

@Repository
public interface SeatTypeRepository extends JpaRepository<SeatType, Integer> {

}
