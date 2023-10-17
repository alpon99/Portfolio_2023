$(document).ready(function () {
    let isScrolling = false;

    $(window).scroll(function () {
        // 스크롤 중인지 여부를 확인하기 위한 변수
        if (!isScrolling) {
            // 스크롤 중인 상태로 변경
            isScrolling = true;

            // 1000ms(1초) 후에 실행되는 타이머
            setTimeout(function () {
                // 현재 스크롤 위치를 확인하고, 0보다 크다면
                if ($(this).scrollTop() > 8900) {
                    // .Words에 scrolled 클래스 추가 (효과 적용)
                    $(".words").addClass("scrolled");
                } else {
                    // .Words에서 scrolled 클래스 제거 (효과 제거)
                    $(".words").removeClass("scrolled");
                }
                // 스크롤 완료 후 스크롤 중 상태를 해제
                isScrolling = false;
            }, 1); // 1000ms(1초)의 딜레이 설정
        }
    });
});