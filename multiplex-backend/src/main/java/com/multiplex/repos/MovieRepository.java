package com.multiplex.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.multiplex.models.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer>{

}
