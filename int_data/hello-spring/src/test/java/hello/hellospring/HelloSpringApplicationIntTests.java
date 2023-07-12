package hello.hellospring;

import hello.hellospring.domain.Member;
import hello.hellospring.repository.MemberRepository;
import hello.hellospring.service.MemberService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
@Transactional
class HelloSpringApplicationIntTests {

	@Autowired
	MemberService memberService;

	@Autowired
	MemberRepository memberRepository;

	@Test
	public void join() throws Exception {
		//Given
		Member member = new Member();
		member.setName("spring");

		//When
		Long saveId = memberService.join(member);
	}

	@Test
	public void duplicateMember() throws Exception{
		//Given
		Member member1 = new Member();
		member1.setName("spring1");

		Member member2 = new Member();
		member2.setName("spring1");

		//when
		memberService.join(member1);
		IllegalStateException e = assertThrows(IllegalStateException.class,
				()-> memberService.join(member2));

		assertThat(e.getMessage()).isEqualTo("this name's already existed.");
	}
}
