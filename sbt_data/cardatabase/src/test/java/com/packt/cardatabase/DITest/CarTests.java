package com.packt.cardatabase.DITest;

import org.springframework.beans.factory.annotation.Autowired;

/*의존성 주입
 * 		-다른 객체에 의존하는 객체를 만들 수 있는 소프트 웨어 개발 기법
 * 3가지유형
 * 	1. 서비스: 이용될수 있는 클래스(의존성)
 * 	2. 클라이언트: 의존성을 이용하는 클래스
 * 	3. 주입기: 의존성(서비스)을 종속 클래스(클라이언트)에 전달*/

public class CarTests {

	@Autowired
	private OwnerTests owner;
	
	/* 1.[생성자 주입] Car 클래스가 서비스 클래스의 객체 생성 -> 의존성 주입x */
	public CarTests() {
		owner = new OwnerTests();
	}
	
	/* 2.[생성자 주입] 서비스 객체가 클래스 생성자에 매개변수로 전달 */
	public CarTests(OwnerTests owner) {
		this.owner = owner;
	}
	
	/* 3.[setter 주입] 의존성이 setter를 통해 제공 */
	public void setOwner(OwnerTests owner) {
		this.owner = owner;
	}
	
//	@Configuration
//	@Bean
	
//	@Resource(name="configFile")
//	private ConfigFile cFile
	
}
