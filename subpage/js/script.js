//a를 클릭했을 때 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function(e){
  e.preventDefault();
});



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

$(function() {
$('.start .animate').scrolla({
  mobile: true, //모바일버전시 활성화
  once: false //스크롤시 딱 한번만 하고싶을땐 true
});    
});
