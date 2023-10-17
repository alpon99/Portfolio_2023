let activeImg;//변수선언
       
gsap.utils.toArray(".interests .inner ul li").forEach((elem) => {
  let image = elem.querySelector('img.fadeImg'),
    //.con02 ul li a를 배열을 forEach문으로  elme매개변수로 반복문실행 , 
   //elem의 하위요소,showImg를 image에 저장
   
      align = e => {
          setX(e.clientX);
          setY(e.clientY);              
      },
    //이벤트발생시 현재 마우스 위치의 x, y 좌표를 setX, setY 변수에 할당합니다.
      startPoint = () => document.addEventListener("mousemove", align),
      //startPoint함수는 mousemove와 align함수가 실행되는 함수

      stopPoint= () => document.removeEventListener("mousemove", align),
     //stopPoint함수는 mousemove와 align함수가 제거되는 함수

   fade = gsap.to(image, {autoAlpha: 1, ease: "none", paused: true }); 
    //변수fade는 이미지가 자동투명도를 0.8되서 일시정지하여 변수 fade에 대입함

  //.con02 ul li a영역에 들어갔을때fade변수가 실행되고 startFollow()함수가 호출되라
  elem.addEventListener('mouseenter', (e) => {
     fade.play();
     startPoint();
  

  //액티브이미지가 있으면 gsap바로 세팅
    if (activeImg) {
      gsap.set(image, {x: gsap.getProperty(activeImg, "x"), 
                       y: gsap.getProperty(activeImg, "y")}
           );
    }
   //이미지의 X값는 activeImg의 x값을 가져오고
   //이미지의 y값는 activeImg의 x값을 가져오고
   //gsap.getProperty()는 (activImage의 X값)=> 속성을 반환


    activeImg = image;  //img.fadeImg
    setX = gsap.quickTo(image, "x", {duration: 0.5, ease:Elastic }),
    setY = gsap.quickTo(image, "y", {duration: 0.5, ease:Elastic })
    // setX, setY 변수를 gsap.quickTo() 메소드를 사용하여, image 요소의 x, y 위치를 빠르게 변경하는 tweens로 초기화합니다.

    align(e);
    //마우스 위치의 x, y 좌표를 setX, setY 변수에 할당하는 함수호출
  });
  elem.addEventListener('mouseleave', () => fade.reverse());
});
  //.reverse() => 애니메이션모든 측면이 뒤로 향하도록 재생 반전