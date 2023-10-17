$(document).ready(function() {
    // 문서가 준비되면 실행되는 함수

    var timelineSection = $('.timeLine'); // 타임라인 섹션 요소를 선택합니다.
    var maxScroll = timelineSection.offset().top + timelineSection.height(); // 스크롤 가능한 최대 위치를 설정합니다.
    var bar = $('.timeLine .inner'); // 프로그레스 바 요소를 선택합니다.
    var scrollDetectionPoint = timelineSection.offset().top; // 타임라인 섹션의 시작 지점을 가져옵니다.
    var maxDetectionPoint = maxScroll; // 타임라인 섹션의 끝 지점을 가져옵니다.
    var hasReachedDetectionPoint = false; // 탐지 지점에 도달했는지를 나타내는 플래그 변수입니다.

    $(window).on('scroll', function() {
        // 윈도우 스크롤 이벤트를 감지하는 함수

        var scrollPos = $(this).scrollTop(); // 현재 스크롤 위치를 가져옵니다.
        
        if (!hasReachedDetectionPoint) {
            if (scrollPos >= scrollDetectionPoint) {
                // 탐지 지점에 도달하지 않았고, 스크롤 위치가 시작 지점 이상이라면
                hasReachedDetectionPoint = true; // 탐지 지점에 도달한 것으로 플래그를 업데이트합니다.
            }
        } else {
            // 탐지 지점에 도달했을 때 실행되는 부분입니다.
            var barHeight = ((Math.min(scrollPos, maxDetectionPoint) - scrollDetectionPoint) / (maxScroll - scrollDetectionPoint)) * 100;
            // 프로그레스 바의 높이를 계산합니다.


            bar.css('height', barHeight + '%'); // 프로그레스 바의 높이를 설정합니다.

            var progressText = Math.min(Math.round(((Math.min(scrollPos, maxDetectionPoint) - scrollDetectionPoint) / (maxScroll - scrollDetectionPoint)) * 100), 100) + ' %';
            // 진행 상태의 텍스트를 계산합니다.

            $('p').text(progressText); // 페이지에 진행 상태를 표시합니다.
        }
    });
});
