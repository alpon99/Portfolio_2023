$(document).ready(function() {
  // 문서가 로드될 때 실행되는 함수

  const friction = 1 / 28;  // 마우스 이동에 사용되는 마찰 계수
  const zoomRatio = 1.05;   // 확대 비율

 // 마우스 이동 이벤트 리스너
  $(document).on('mousemove', function(e) {
    // 마우스 위치를 기준으로 회전 효과 계산
    const followX = window.innerWidth / 2 - e.clientX; // 마우스 위치와 화면 중심의 차이 계산 (X축)
    const followY = window.innerHeight / 2 - e.clientY; // 마우스 위치와 화면 중심의 차이 계산 (Y축)
    const x = (-followX) * friction; // 마우스 X축 움직임에 마찰 계수를 곱해서 회전값 계산
    const y = followY * friction; // 마우스 Y축 움직임에 마찰 계수를 곱해서 회전값 계산

    // 회전 효과를 .wrapper 요소에 적용
    $('.wrapper').css({
      transform: `perspective(600px) rotateY(${x}deg) rotateX(${y}deg)`,
    });
  });

  // 모양 요소 클릭 이벤트 리스너
  $('.shape2, .shape3, .shape4').on('click', function() {
    const shapeContent = $(this); // 클릭한 모양 요소
    const textElement = shapeContent.find('p'); // 모양 내부의 텍스트 요소
    const initialWidth = shapeContent.width(); // 초기 너비
    const initialHeight = shapeContent.height(); // 초기 높이
    const initialFontSize = parseInt(textElement.css('font-size')); // 초기 글꼴 크기

    //클릭하면 클립보드에 복사
    const text = textElement.text(); // 텍스트 요소에서 텍스트를 가져와서 text 변수에 저장
    const tempInput = $('<input>').val(text); // 임시 입력 필드 생성 및 텍스트 삽입
    tempInput.appendTo('body').select(); // 임시 입력 필드를 body에 추가하고 선택된 상태로 만듦
    document.execCommand('copy'); // 복사 명령 실행
    tempInput.remove(); // 임시 입력 필드 제거

    // 클릭된 모양에 'clicked' 클래스 추가
    shapeContent.addClass('clicked');

    // 모양 확대 애니메이션
    shapeContent.animate({
      width: initialWidth * zoomRatio, // 너비 확대
      height: initialHeight * zoomRatio, // 높이 확대
      left: `-=${(initialWidth * (zoomRatio - 1) / 2)}`, // 중심 이동
      top: `-=${(initialHeight * (zoomRatio - 1) / 2)}`,
    }, 200);

    // 텍스트 크기 확대 애니메이션
    textElement.animate({
      'font-size': initialFontSize * zoomRatio,
    }, 200);

    // 일정 시간(0.1초) 후에 모양과 텍스트 크기를 원래대로 복원하는 애니메이션
    setTimeout(function() {
      // 'clicked' 클래스 제거
      shapeContent.removeClass('clicked');

      // 모양 크기 및 위치 복원
      shapeContent.animate({
        width: initialWidth, // 너비 복원
        height: initialHeight, // 높이 복원
        left: `+=${(initialWidth * (zoomRatio - 1) / 2)}`, // 중심 이동 복원
        top: `+=${(initialHeight * (zoomRatio - 1) / 2)}`,
      }, 200);

      // 텍스트 크기 복원
      textElement.animate({
        'font-size': initialFontSize,
      }, 200);
    }, 100); // 0.1초 후에 실행
  });
});

    // .wrapper 요소의 transform 속성 업데이트
    /* perspective - 원근거리 값이 작을수록 강한 원근효과 */
    /* rotateY(${x}deg): 요소를 Y축을 기준으로 회전 
    ${x}deg 부분은 변수 x에 저장된 값에 따라 회전 각도가 결정 
    마우스 움직임에 따라 x 값이 변하면서 요소가 Y축을 따라 회전 */
    