package com.packt.cardatabase.DITest;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

import com.packt.cardatabase.domain.Car;

public class Test00 {
	List<Car> list = new ArrayList<Car>();
	Stream<Car> a = list.stream();
}
