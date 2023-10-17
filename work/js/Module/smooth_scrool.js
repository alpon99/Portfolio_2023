$(function () {

	'use strict';

	// Lenis 부드러운 스크롤 초기화
	const lenis = new Lenis({
		duration: 1.4 // 스크롤 지속 시간 설정 (초 단위)
	})

	// Lenis 스크롤 이벤트 리스너 등록
	lenis.on('scroll', (e) => {
		console.log(e) // 스크롤 이벤트 발생 시 로그 출력
	})

	// requestAnimationFrame을 사용하여 애니메이션 업데이트
	function raf(time) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf)

	// GSAP ScrollTrigger에 Lenis 통합
	lenis.on('scroll', ScrollTrigger.update)

	// GSAP ticker에 Lenis 애니메이션 추가
	gsap.ticker.add((time) => {
		lenis.raf(time * 1000)
	})
	

	// ScrollTrigger 애니메이션 생성
	function scrollTrig() {

		gsap.registerPlugin(ScrollTrigger);

		// gsapBl 변수에 '.skill__inner' 요소의 너비 저장
		let gsapBl = $('.skill__inner').width();

		// 전체 너비 설정 (주석 처리)
		// $('.gsap__item').css('width', gsapBl + 'px');

		// gsapTrack 변수에 '.skill__track' 요소의 너비 저장
		let gsapTrack = $('.skill__track').width();

		// 슬라이더 트랙 변환 값 계산
		let scrollSliderTransform = gsapTrack - gsapBl

		// ScrollTrigger 생성
		gsap.to('.skill__track', {
			scrollTrigger: {
				trigger: '.skill__slider',
				start: 'center center',
				end: () => '+=' + gsapTrack,
				pin: true,
				scrub: 2.2
			},
			x: '-=' + scrollSliderTransform + 'px'
		});

	}

	// ScrollTrigger 애니메이션 적용 함수 호출
	scrollTrig();
	// 윈도우 리사이즈 이벤트 디바운스 처리
	
});
