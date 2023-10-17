$(function(){
    gsap.timeline({
        scrollTrigger: {
            trigger:'footer', 
            start:'0% 80%',
            end:'100% 100%',
            scrub:1,
        }
    })

    .to('footer', {backgroundColor:'#000', ease:'none',duration:3},0)
/*     .to('.svgAni path', {stroke:'#000', ease:'none',duration:5},0)
    .to('scroll', {opacity:'0', ease:'none',duration:5},0)
    .fromTo('.videoWrap video', {'clip-path':'inset(60% round 30%)'}, {'clip-path': 'inset(0% round 0%)',ease:'none',duration:10},0) */
});