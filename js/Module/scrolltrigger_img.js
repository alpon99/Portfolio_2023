        /* 01. 이질감 표현하기  */
        gsap.to(" .polygon .textBox .subText", {
            yPercent: -200,
            ease: "none",
            duration: .5,
            scrollTrigger: {
                trigger: " .polygon .textBox .subText",
                start: "top bottom",
                ene: "bottom top",
                markers: false,
                scrub: true
            }
        });

        gsap.to(" .polygon .textBox .subText2", {
            yPercent: -700,
            ease: "none",
            duration: .5,
            scrollTrigger: {
                trigger: " .polygon .textBox .subText2",
                start: "top bottom",
                ene: "bottom top",
                markers: false,
                scrub: true
            }
        });
        gsap.to(" .polygon .textBox .subText3", {
            yPercent: -1800,
            ease: "none",
            duration: .5,
            scrollTrigger: {
                trigger: " .polygon .textBox .subText3",
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