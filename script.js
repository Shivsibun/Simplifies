function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
locomotiveAnimation()
function loading(){
    var anm=gsap.timeline()
    anm.from("#page1",{
       opacity:0,
       duration:0.2,
       delay:0.1
    })
    anm.from("#page1",{
         transform:"scaleX(0.8) scaleY(0.4) translateY(90%) ",
         borderRadius:"150px",
         duration:1.2,
         ease:"expo.out"
    })
    anm.from("#page1 h1,#page1 p,#page1 div,#page1 h2,#page1 h3,nav",{
        opacity:0,
        duration:0.4,
        stragger:0.2
    })
    }
loading()
function navMenu(){
document.querySelector('nav').addEventListener('mouseenter',function(){
    var gl=gsap.timeline()
    gl.to("#nav-bottom",{
        height:"25vh",
        duration:0.5,
    })
    gl.to(".nav-part2 h5",{
        display:'block',
        duration:0.1
    })
    gl.to('.nav-part2 h5 span',{
        y:0,
        stragger:{
            amount:0.6
        }
    })
})
document.querySelector('nav').addEventListener('mouseleave',function(){
    var gl=gsap.timeline()
   
    gl.to('.nav-part2 h5 span',{
        y:25,
        stragger:{
            amount:0.2
        }
    })
    gl.to(".nav-part2 h5",{
        display:'none',
        duration:0.2
    })
    gl.to("#nav-bottom",{
        height:"0vh",
        duration:0.3
    })
})
 }
navMenu();
function hoverimg(){
var rightele=document.querySelectorAll("#blkh1");
rightele.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        gsap.to(ele.querySelector('img'),{
            opacity:0.7,
            scale:1

        })
    })
    ele.addEventListener("mouseleave",function(){
        gsap.to(ele.querySelector('img'),{
            opacity:0,
            scale:0
        })
    })
    ele.addEventListener("mouseenter",function(dets){
        gsap.to(ele.querySelector('img'),{
           x:dets.x-ele.getBoundingClientRect().x-90,
           y:dets.y-ele.getBoundingClientRect().y-90
        })
    })
})
}
hoverimg();
function textanimate(){
    var typed=new Typed('.auto-type',{
        strings:['GROWTH','RELIABILITY','EFFECIENCY','REDUCED COST OF QUALITY'],
        typeSpeed:100,
        backSpeed:50,
        startDelay:500,
        backDelay:1000,
        loop:true,
        showCursor:true,
        cursorChar: '|'
    })
}
textanimate();

