$(document).ready(function() {
    var isVisible = false; // 애니메이션이 이미 시작되었는지 여부를 추적합니다.

    $(window).on("scroll", function() {
        if (checkVisible($('.skill .inner ul')) && !isVisible) {
            runCounter();
            isVisible = true; // 애니메이션이 반복되지 않도록 isVisible을 true로 설정합니다.
        } else if (!checkVisible($('.skill .inner ul'))) {
            resetCounter();
            isVisible = false; // 스킬 섹션을 벗어나면 isVisible를 false로 설정하여 초기화합니다.
        }
    });

    function runCounter() {
        $('ul li[data-count]').each(function() {
            var This = $(this).find('.number');
            var countTo = parseInt(This.parent().data('count'));
            $({ countNum: This.text() }).animate({
                countNum: countTo
            },
            {
                duration: 1800,
                easing: 'linear',
                step: function() {
                    This.text(Math.floor(this.countNum).toLocaleString());
                },
                complete: function() {
                    This.text(this.countNum.toLocaleString());
                }
            });
        });
    }

    function resetCounter() {
        $('ul li[data-count]').each(function() {
            var This = $(this).find('.number');
            var countTo = 0;
            This.text(countTo.toLocaleString());
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
