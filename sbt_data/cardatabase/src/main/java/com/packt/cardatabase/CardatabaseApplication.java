package com.packt.cardatabase;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/*
 * @EnableAutoConfiguration
 * 		SB 자동 구성 활성화. SB는 의존성 기반으로 프로젝트를 자동 구성
 * 			ex) spring-boot-starter-web 의존성이 있으면 SB는 web app(lication)을
 * 				개발 중이라 가정하고 그에 따라 app을 구성한다.
 * @ComponentScan	SB component 검색으로 app의 모든 component 찾음
 * @Configuration	Bean 정의의 원본으로 쓸 수 있는 클래스 정의
 * */
@SpringBootApplication
public class CardatabaseApplication {

	public static void main(String[] args) {
		SpringApplication.run(CardatabaseApplication.class, args);
	}

}
