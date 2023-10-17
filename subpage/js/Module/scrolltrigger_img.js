        /* 01. 이질감 표현하기  */
        gsap.to(" .mainTitle .main .textBox", {
            yPercent: -100,
            ease: "none",
            duration: .5,
            scrollTrigger: {
                trigger: " .mainTitle .main .textBox",
                start: "top bottom",
                ene: "bottom top",
                markers: false,
                scrub: true
            }
        });

        gsap.to(" .mainTitle .main .iconBox", {
            yPercent: -300,
            ease: "none",
            duration: .5,
            scrollTrigger: {
                trigger: " .mainTitle .main .iconBox",
                start: "top bottom",
                ene: "bottom top",
                markers: false,
                scrub: true
            }
        });

        gsap.to(" .mainTitle .subBox .overview", {
            yPercent: -200,
            ease: "none",
            duration: .5,
            scrollTrigger: {
                trigger: " .mainTitle .subBox .overview",
                start: "top bottom",
                ene: "bottom top",
                markers: false,
                scrub: true
            }
        });
        gsap.to(" .mainTitle .subBox .goals", {
            yPercent: -200,
            ease: "none",
            duration: .5,
            scrollTrigger: {
                trigger: " .mainTitle .subBox .goals",
                start: "top bottom",
                ene: "bottom top",
                markers: false,
                scrub: true
            }
        });






        //02. 여러개 이질감 표현하기
        /* gsap.utils.toArray(".menuButton").forEach(item => {
            gsap.to(item, {
                yPercent: -1500,
                ease: "none",
                duration: 0.5,
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "bottom top",
                    markers: false,
                    scrub: 0.5
                }
            });
        }); */