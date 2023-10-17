$(document).ready(function() {
    // 비디오 요소 및 컨테이너 제어
    var video1 = document.getElementById("videoElement1");
    var video2 = document.getElementById("videoElement2");

    // 첫 번째 비디오 재생 종료 이벤트 처리
    video1.addEventListener("ended", function() {
        // 첫 번째 비디오 감추고 두 번째 비디오 표시 및 재생
        video1.style.display = "none";
        video2.style.display = "block";
        video2.play();
    });
});
