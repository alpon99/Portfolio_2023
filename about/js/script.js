
/* 가로스크롤 */
// 수평 스크롤 요소와 콘텐트 요소를 선택합니다.
const scrollSection = document.querySelector('.scroll__section');
const scrollContent = document.querySelector('.scroll__content');

// 스크롤 이벤트를 감지하는 이벤트 리스너를 등록합니다.
document.addEventListener('scroll', e => {
  // 현재 스크롤된 위치를 가져옵니다.
  const scrolled = window.pageYOffset;

  // 스크롤 섹션의 상단에서 현재 스크롤 위치까지의 거리를 계산합니다.
  const sectionOffset = Math.abs(scrollSection.offsetTop - scrolled);

  // 스크롤 섹션의 아래쪽이 뷰포트의 아래쪽에 도달하지 않은 경우에만 실행합니다.
  // notReachedBottom 값은 스크롤 섹션의 아래쪽이 뷰포트 아래에 있는 픽셀 수를 나타냅니다.
  // 최소한 0 이상의 값을 유지하도록 설정합니다.
  const notReachedBottom = parseInt(Math.max(0, scrollSection.getBoundingClientRect().bottom - window.innerHeight));

      // GSAP를 사용하여 콘텐트 요소를 가로 방향으로 이동시킵니다.
    // 스크롤 위치에 따라 요소가 왼쪽으로 이동하면서 수평 스크롤 효과를 생성합니다.
  if (scrollSection.offsetTop <= scrolled && notReachedBottom) {
    gsap.to(scrollContent, {
      x: -sectionOffset
    });
  }
});



//a를 클릭했을 때 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});


/* splitting 불러오기 */
console.clear();
Splitting();



$(document).ready(function() {

    $(".gnb .right .open__gnb").on("click", function(e){
        e.preventDefault();
        $(".gnb__gnb, .gnb__bg").addClass("on");
        $(".gnb__gnb").css("transition-duration", "1s");
        $(".gnb__bg").css("transition-duration", "0.8s");
    });

    $(".gnb__gnb .gnbInner .close__gnb").on("click", function(e){
        e.preventDefault();
        $(".gnb__gnb, .gnb__bg").removeClass("on");
        $(".gnb__gnb").css("transition-duration", "0.7s");
        $(".gnb__bg").css("transition-duration", "0.8s");
    });

    // gnb 고정
    $(".gnb__gnb, .gnb__bg").on("transitionend", function() {
        if ($(this).hasClass("on")) {
            $(this).css("position", "fixed");
        } else {
            $(this).css("position", "absolute");
        }
    });
});


$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 
