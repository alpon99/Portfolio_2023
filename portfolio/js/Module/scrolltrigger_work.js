// 페이지가 로드될 때 실행하는 함수
$(function() {
    // ScrollTrigger 플러그인을 gsap에 등록
    gsap.registerPlugin(ScrollTrigger);
    
    // 이미지 박스에 대한 애니메이션을 설정
    gsap.utils.toArray('.imgBox').forEach(function(imgBox) {
        gsap.timeline({
            // 스크롤 트리거 옵션 설정
            scrollTrigger: {
                trigger: imgBox, // 해당 요소가 스크롤 트리거의 대상이 됨
                start: '50% 100%', // 해당 요소가 화면 중앙에 도달할 때 애니메이션 시작
                toggleClass: {'targets' : imgBox, className: 'active'},
                // 스크롤 위치에 따라 클래스를 토글하여 요소에 클래스 추가 또는 제거
                scrub: 1 // 스크롤 동안 애니메이션을 조정하여 부드럽게 표현
            }
        })
    })
    
    // 텍스트 박스에 대한 애니메이션을 설정
    gsap.utils.toArray('.workList .inner .textBox').forEach(function(textBox) {
        gsap.timeline({
            // 스크롤 트리거 옵션 설정
            scrollTrigger: {
                trigger: textBox,
                start: '50% 80%', // 해당 요소가 화면 중앙에 도달할 때 애니메이션 시작
                end: '100% 0%', // 해당 요소가 화면 상단에 도달하면 애니메이션 끝
                toggleClass: {'targets' : textBox, className : 'active'},
                // 스크롤 위치에 따라 클래스를 토글하여 요소에 클래스 추가 또는 제거
                scrub: true // 스크롤 동안 애니메이션을 조정하여 부드럽게 표현
            }
        })
    })
})

/* 스크럽 값이 true 일때:
스크롤의 속도에 따라 애니메이션의 진행도를 조절하여 자연스러운 움직임을 제공 
스크롤 속도가 빠르면 애니메이션도 빠르게 진행되고, 스크롤 속도가 천천히면 애니메이션도 부드럽게 진행*/

/* 스크럽 값이 1일때:
ScrollTrigger는 애니메이션의 진행을 스크롤 위치와 완전히 일치
스크롤을 한 픽셀 움직이면 애니메이션도 한 픽셀 진행, 애니메이션과 스크롤이 1:1로 매치되는 효과를 낼 때 사용 */