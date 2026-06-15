import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "/src/index.css";

gsap.registerPlugin(ScrollTrigger);


//time controls
// const play = document.querySelector(".play")
// const pause = document.querySelector(".pause")
// const restart = document.querySelector(".restart")
// const reverse = document.querySelector(".reverse")

// const tl = gsap.timeline({paused:true});

// tl.to(".box1", {
//   duration:1.5,
//   x: 800,
//   delay: 1,
//   ease: "expo.out",
// })
//   .to(".box2", {
//     duration:1.5,
//     x: 800,
//     ease: "expo.out",
//   })
//   .to(".box3", {
//     duration:1.5,
//     x: 800,
//     ease: "expo.out",
//   })
//   .to(".box4", {
//     duration:1.5,
//     x: 800,
//     ease: "expo.out",
//   });

//   play.addEventListener("click",()=>{
//     tl.play()
//   })
//    pause.addEventListener("click",()=>{
//     tl.pause()
//   })
//    restart.addEventListener("click",()=>{
//     tl.restart()
//   })
//    reverse.addEventListener("click",()=>{
//     tl.reverse()
//   })

//SCROLL TRIGGER ANIMATION
gsap.set(".image-div",{
    scale:0.3
})

gsap.set(".content",{
    gap:"25rem"
})

const tl  = gsap.timeline({
      scrollTrigger:{
        trigger:".page2",
        start:"top 0%",
        end:"top -100%",
        scrub:true,
        pin:true
    }
})
tl.to(".image-div",{
    scale:1,
    ease:"power4.out"
}).to(".content",{
    gap:"7rem"
},"<")