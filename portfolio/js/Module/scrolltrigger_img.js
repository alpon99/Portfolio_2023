        /* 01. 이질감 표현하기  */
/*         gsap.to(" .contents .subTitle", {
            yPercent: -200,
            ease: "none",
            duration: .5,
            scrollTrigger: {
                trigger: " .contents .subTitle",
                start: "top bottom",
                ene: "bottom top",
                markers: false,
                scrub: true
            }
        });
 */


        //02. 여러개 이질감 표현하기
        gsap.utils.toArray(".subTitle").forEach(item => {
            gsap.to(item, {
                yPercent: -200,
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
        });