$(document).ready(function() {
    var isVisible = false; // 애니메이션이 이미 시작되었는지 여부를 추적합니다.

    $(window).on("scroll", function() {
        // 스크롤 이벤트 감지

        if (checkVisible($('.skill .inner ul')) && !isVisible) {
            // 'skill' 클래스 하위의 'inner' 클래스 하위의 ul 요소가 화면에 보일 때, isVisible이 false인 경우 실행
            runCounter(); // 카운터 실행
            isVisible = true; // 애니메이션이 반복되지 않도록 isVisible을 true로 설정합니다.
        } else if (!checkVisible($('.skill .inner ul'))) {
            // 'skill' 클래스 하위의 'inner' 클래스 하위의 ul 요소가 화면에 보이지 않는 경우 실행
            resetCounter(); // 카운터 초기화
            isVisible = false; // 스킬 섹션을 벗어나면 isVisible를 false로 설정하여 초기화합니다.
        }
    });

    function runCounter() {
        // 카운터 실행 함수

        $('ul li[data-count]').each(function() {
            // 'data-count' 속성을 가진 리스트 요소를 찾아 반복
            var This = $(this).find('.number');
            // 현재 요소에서 숫자를 표시하는 요소를 찾아 변수에 할당
            var countTo = parseInt(This.parent().data('count'));
            // 부모 요소의 'data-count' 값을 가져와 정수로 변환하여 변수에 할당

            $({ countNum: This.text() }).animate({
                countNum: countTo
            },
            {
                duration: 1800,
                easing: 'linear',
                step: function() {
                    This.text(Math.floor(this.countNum).toLocaleString());
                },
                complete: function() {
                    This.text(this.countNum.toLocaleString());
                }
            });
        });
    }

    function resetCounter() {
        // 카운터 초기화 함수

        $('ul li[data-count]').each(function() {
            // 'data-count' 속성을 가진 리스트 요소를 찾아 반복
            var This = $(this).find('.number');
            // 현재 요소에서 숫자를 표시하는 요소를 찾아 변수에 할당
            var countTo = 0;
            This.text(countTo.toLocaleString());
        });
    }
});

function checkVisible(elm, eval) {
    // 특정 요소가 화면에 보이는지 여부를 확인하는 함수
    eval = eval || "object visible";
    // 평가 문자열이 주어지지 않으면 "object visible"로 기본 설정
    var viewportHeight = $(window).height();
    // 뷰포트(화면)의 높이를 가져옵니다.
    var scrolltop = $(window).scrollTop();
    // 스크롤바의 현재 위치를 가져옵니다.
    var y = $(elm).offset().top;
    // 특정 요소의 화면 위에서의 위치를 가져옵니다.
    var elementHeight = $(elm).height();
    // 특정 요소의 높이를 가져옵니다.
    if (eval == "object visible") {
        // 만약 평가 문자열이 "object visible"이면
        return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
        // 특정 요소가 뷰포트 안에 있으면 true 반환
    }

    if (eval == "above") {
        // 만약 평가 문자열이 "above"이면
        return ((y < (viewportHeight + scrolltop)));
        // 특정 요소가 뷰포트 위에 있으면 true 반환
    }
}