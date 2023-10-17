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

	document.addEventListener('keydown', function(e) {
		if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
			e.preventDefault();
		}
	});
});
