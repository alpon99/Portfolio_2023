$(document).ready(function() {

    var isVisible = false; // 애니메이션이 이미 시작되었는지 여부를 추적합니다.
    
    $(window).on("scroll", function() {
        if (checkVisible($('.skill .inner ul')) && !isVisible) {
            runCounter();
            isVisible = true; // 애니메이션이 반복되지 않도록 isVisible을 true로 설정합니다.
        }
    });
    
    function runCounter() {
        $('ul li .number').each(function() {
            var This = $(this);
            $({Count: This.text()}).animate({
                Count: This.parent().attr("data-count")
            }, {
                duration: 2600,
                easing: "linear",
                step: function(now) {
                    This.text(Math.floor(now).toLocaleString());
                },
                complete: function() {
                    // 애니메이션이 완료된 후 추가 작업을 수행할 수 있습니다.
                }
            });
        });
    }
});

function checkVisible(elm, eval) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(),
        scrolltop = $(window).scrollTop(),
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (eval == "object visible") {
        return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    }
    if (eval == "above") {
        return ((y < (viewportHeight + scrolltop)));
    }
}
