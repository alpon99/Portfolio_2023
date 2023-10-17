$(document).ready(function() {
    var isVisible = false;

    $(window).on("scroll", function() {
        $('.scroll__section .inner').each(function(index) {
            if (checkVisible(this) && !$(this).hasClass('counted')) {
                var element = this;
                setTimeout(function() {
                    runCounter(element);
                }, index * 600); // 각 리스트마다 100ms 간격으로 애니메이션 시작
            } else if (!checkVisible(this) && $(this).hasClass('counted')) {
                resetCounter(this);
            }
        });
    });

    function runCounter(element) {
        $(element).addClass('counted');
        var This = $(element).find('.number');
        var countTo = parseInt($(element).data('count'));
        $({ countNum: 0 }).animate({
            countNum: countTo
        },
        {
            duration: 1100,
            easing: 'linear',
            step: function() {
                This.text(Math.floor(this.countNum).toLocaleString());
            },
            complete: function() {
                This.text(this.countNum.toLocaleString());
            }
        });
    }

    function resetCounter(element) {
        $(element).removeClass('counted');
        var This = $(element).find('.number');
        var countTo = 0;
        This.text(countTo.toLocaleString());
    }

    function checkVisible(elm) {
        var viewportHeight = $(window).height(),
            scrolltop = $(window).scrollTop(),
            y = $(elm).offset().top,
            elementHeight = $(elm).height();

        return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    }
});
