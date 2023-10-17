$(document).ready(function () {
    let isScrolling = false;

    $(window).scroll(function () {
        if (!isScrolling) {
            isScrolling = true;

            setTimeout(function () {
                let threshold = 8600; // 기본값

                if (window.matchMedia("(max-width: 1850px)").matches) {
                    threshold = 8200; // 화면 너비가 940px 이하일 때
                } 
                if (window.matchMedia("(max-width: 1800px)").matches) {
                    threshold = 8000; // 화면 너비가 760px 이하일 때
                }
                if (window.matchMedia("(max-width: 1750px)").matches) {
                    threshold = 7800; // 화면 너비가 760px 이하일 때
                } 
                if (window.matchMedia("(max-width: 1700px)").matches) {
                    threshold = 7600; // 화면 너비가 760px 이하일 때
                }
                if (window.matchMedia("(max-width: 1650px)").matches) {
                    threshold = 7400; // 화면 너비가 940px 이하일 때
                } 
                if (window.matchMedia("(max-width: 1600px)").matches) {
                    threshold = 7200; // 화면 너비가 760px 이하일 때
                }
                if (window.matchMedia("(max-width: 1550px)").matches) {
                    threshold = 7000; // 화면 너비가 760px 이하일 때
                } 
                if (window.matchMedia("(max-width: 1500px)").matches) {
                    threshold = 6800; // 화면 너비가 760px 이하일 때
                }
                if (window.matchMedia("(max-width: 1450px)").matches) {
                    threshold = 6600; // 화면 너비가 760px 이하일 때
                }
                if (window.matchMedia("(max-width: 1400px)").matches) {
                    threshold = 6400; // 화면 너비가 760px 이하일 때
                }
                if (window.matchMedia("(max-width: 1350px)").matches) {
                    threshold = 6200; // 화면 너비가 760px 이하일 때
                }
                if (window.matchMedia("(max-width: 1300px)").matches) {
                    threshold = 6000; // 화면 너비가 760px 이하일 때
                }
                if (window.matchMedia("(max-width: 1250px)").matches) {
                    threshold = 5800; // 화면 너비가 760px 이하일 때
                }
                if (window.matchMedia("(max-width: 1200px)").matches) {
                    threshold = 5500; // 화면 너비가 760px 이하일 때
                }
                if (window.matchMedia("(max-width: 1150px)").matches) {
                    threshold = 5200; // 화면 너비가 760px 이하일 때
                }
                if (window.matchMedia("(max-width: 1100px)").matches) {
                    threshold = 4900; // 화면 너비가 760px 이하일 때
                }
                if (window.matchMedia("(max-width: 1050px)").matches) {
                    threshold = 4600; // 화면 너비가 760px 이하일 때
                }
                if (window.matchMedia("(max-width: 1000px)").matches) {
                    threshold = 4300; // 화면 너비가 760px 이하일 때
                }
                if (window.matchMedia("(max-width: 950px)").matches) {
                    threshold = 4000; // 화면 너비가 760px 이하일 때
                }
                if (window.matchMedia("(max-width: 900px)").matches) {
                    threshold = 3700; // 화면 너비가 760px 이하일 때
                }
                if (window.matchMedia("(max-width: 850px)").matches) {
                    threshold = 3400; // 화면 너비가 760px 이하일 때
                }
                if (window.matchMedia("(max-width: 800px)").matches) {
                    threshold = 3100; // 화면 너비가 760px 이하일 때
                }




                if ($(this).scrollTop() > threshold) {
                    $(".words").addClass("scrolled");
                } else {
                    $(".words").removeClass("scrolled");
                }
                isScrolling = false;
            }, 1);
        }
    });
});
