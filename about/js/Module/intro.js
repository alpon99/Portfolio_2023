// 애니메이션 라이브러리 'anime.js'를 사용하여 텍스트 애니메이션 생성
anime
    .timeline({ loop: false }) // 반복하지 않음
    .add({
        targets: ".intro-title span",
        translateX: [140, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 450, // 수정된 부분
        delay: function(el, i) {
            return 0 + 85 * i; // 수정된 부분
        }
    })
    .add({
        targets: ".intro-title span",
        translateX: [0, -140],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 450, // 수정된 부분
        delay: function(el, i) {
            return 0 + 85 * i; // 수정된 부분
        }
    });

// 로더 요소를 위로 이동하는 TweenMax 애니메이션
/* TweenMax :(GSAP) 라이브러리의 일부로, 웹 애니메이션을 쉽게 생성하고 제어할 수 있게 도와주는 JavaScript 라이브러리 */
TweenMax.to(".loader", 1.6, {
    delay: 1.5,
    top: "-3000px",
    ease: Expo.easeInOut
});

