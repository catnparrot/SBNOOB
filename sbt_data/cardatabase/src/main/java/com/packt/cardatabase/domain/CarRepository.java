package com.packt.cardatabase.domain;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.util.Streamable;

public interface CarRepository extends CrudRepository<Car, Long> {

	List<Car> findByBrand(String brand);
	
	List<Car> findByColor(String color);
	
	List<Car> findByBrandAndModel(String brand, String model);
	
	List<Car> findByBrandOrColor(String brand, String color);
	
	List<Car> findByBrandOrderByYearAsc(String brand);
	
	Streamable<Car> findByModel(String model);
	
	/* - chunked(one-by-one or in batches) depending on stream consumption. */
	/* - single query using typically cursors. */
	Stream<Car> findByPrice(int price);
	
	/*Pageable.getPageSize() at Pageable.getOffset()*/
//	Page<Car> findByModelAndColor(String model, String color);
	
	/*Pageable.getPageSize() + 1 at Pageable.getOffset()*/
//	Slice<Car> findByModelOrColor(String model, String color);
	
}
