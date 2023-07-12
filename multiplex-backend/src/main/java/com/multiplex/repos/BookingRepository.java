package com.multiplex.repos;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.multiplex.models.Booking;
import com.multiplex.models.User;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {
	
	List<Booking> findByUser(User user);
	List<Booking> findByShowShowIdAndShowDate(int showid,LocalDate date);

}
