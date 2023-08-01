package com.packt.cardatabase.domain;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.util.Streamable;

@RepositoryRestResource
public interface CarRepository extends CrudRepository<Car, Long> {
	
	List<Car> findByBrand(@Param("brand")String brand);
	
	List<Car> findByColor(@Param("color")String color);
	
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
