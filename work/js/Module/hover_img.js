$(function() {
    var img = $('.img'); // 이미지 요소를 선택
    var bg = $('.bg'); // 배경 요소를 선택
    var isHovering = false; // 마우스가 요소 위에 있는지 여부를 추적하기 위한 변수
    var mouseX = 0; // 현재 마우스의 X 좌표 초기화
    var mouseY = 0; // 현재 마우스의 Y 좌표 초기화
    var currentX = 0; // 이미지의 현재 X 좌표 초기화
    var currentY = 0; // 이미지의 현재 Y 좌표 초기화
    var easingFactor = .8; // 이동에 사용할 보간 계수 (0.1은 예시입니다)

    $(document).mousemove(function(e) {
        mouseX = e.pageX; // 현재 마우스의 X 좌표를 업데이트
        mouseY = e.pageY; // 현재 마우스의 Y 좌표를 업데이트
    });

    function animate() {
        // 마우스 위치와 이미지 위치 사이의 거리 계산
        var dx = mouseX - currentX;
        var dy = mouseY - currentY;

        // 보간을 사용하여 부드러운 이동 계산
        currentX += dx * easingFactor;
        currentY += dy * easingFactor;

        // 이미지 요소의 위치 업데이트
        img.css({
            left: currentX + 'px',
            top: currentY + 'px'
        });

        // 마우스가 bg 요소 안에 있는지 여부 확인
        if (
            currentX >= bg.offset().left &&
            currentX <= bg.offset().left + bg.width() &&
            currentY >= bg.offset().top &&
            currentY <= bg.offset().top + bg.height()
        ) {
            if (!isHovering) {
                // 마우스가 bg 요소 안으로 진입한 경우
                img.addClass('enlarge'); // 이미지를 확대
                isHovering = true;
            }
        } else {
            if (isHovering) {
                // 마우스가 bg 요소 밖으로 나간 경우
                img.removeClass('enlarge'); // 이미지 크기를 원래대로 복원
                isHovering = false;
            }
        }

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
});

