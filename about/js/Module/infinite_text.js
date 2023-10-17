var container = document.querySelector(".container"); /* ".container" 클래스를 가진 요소를 변수 container에 저장합니다. */
document.body.addEventListener("mousemove", e => { /* 문서(body)에서 마우스 움직임 이벤트를 감지하면, 아래의 콜백 함수를 실행합니다. */
  var x = e.clientX; /* 마우스의 현재 가로 위치를 변수 x에 저장합니다. */
  var y = e.clientY -205; /* 마우스의 현재 세로 위치에서 35를 빼서 변수 y에 저장합니다. */
  gsap.to(container, {
    y: y
  });
  gsap.to(".menu-mask", {
    y: -y
  });
});



// const 받는 이벤트가 발동된 순간에 값을 사용하기 위해 사용

