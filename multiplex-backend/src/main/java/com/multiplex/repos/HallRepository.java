package com.multiplex.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.multiplex.models.Hall;

@Repository
public interface HallRepository extends JpaRepository<Hall, Integer> {

}
