$(document).ready(function () {
    // follower 요소를 생성하고 body에 추가합니다.
    var follower = $('<div class="follower"></div>').appendTo('body');
    
    // follower 요소를 선택합니다.
    var follower = $('.follower');
    
    // 마우스의 현재 위치를 저장하는 변수들입니다.
    var mouseX = 0;
    var mouseY = 0;
    
    // follower의 초기 위치를 화면 중앙으로 설정합니다.
    var mouseX = $(window).width() / 2;
    var mouseY = $(window).height() / 2;

    // 초기 follower의 크기와 투명도를 설정합니다.
    var followerSize = 17;
    var followerOpacity = 1;
    
    // follower 이동 및 크기, 투명도 조절 속도를 지정합니다.
    var speed = 0.06;
    
    // 링크 위에 마우스가 있는지를 나타내는 변수입니다.
    var isMouseOverLink = false;

    // follower의 목표 크기와 투명도를 저장하는 변수들입니다.
    var targetFollowerSize = followerSize;
    var targetFollowerOpacity = followerOpacity;

    // 마우스가 움직일 때의 이벤트 처리
    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;

        // 링크 위에 있을 때와 아닐 때의 크기와 투명도 값을 설정합니다.
        if (isMouseOverLink) {
            targetFollowerSize = 35;
            targetFollowerOpacity = 0.6;
        } else {
            targetFollowerSize = 17;
            targetFollowerOpacity = 1;
        }
    });

    // 링크에 hover 이벤트를 설정합니다.
    $('a').hover(
        function () {
            isMouseOverLink = true;
        },
        function () {
            isMouseOverLink = false;
        }
    );

    // follower 이동 및 애니메이션 함수
    function moveFollower() {
        var targetX = mouseX - followerSize / 2;
        var targetY = mouseY - followerSize / 2;
        var newX = follower.offset().left + (targetX - follower.offset().left) * speed;
        var newY = follower.offset().top + (targetY - follower.offset().top) * speed;
        followerSize += (targetFollowerSize - followerSize) * speed;
        followerOpacity += (targetFollowerOpacity - followerOpacity) * speed;

        // follower 요소의 위치, 크기, 투명도를 업데이트합니다.
        follower.css({
            left: newX,
            top: newY,
            width: followerSize + 'px',
            height: followerSize + 'px',
            opacity: followerOpacity
        });

        // 다음 프레임에서 moveFollower 함수를 호출하여 애니메이션을 지속합니다.
        requestAnimationFrame(moveFollower);
    }

    // 최초에 한 번 moveFollower 함수를 호출하여 애니메이션을 시작합니다.
    moveFollower();
});
