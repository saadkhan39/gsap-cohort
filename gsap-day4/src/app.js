import { gsap } from "gsap";
import "/src/index.css";

const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const restart = document.querySelector(".restart")
const reverse = document.querySelector(".reverse")

const tl = gsap.timeline({paused:true});

tl.to(".box1", {
  duration:1.5,
  x: 800,
  delay: 1,
  ease: "expo.out",
})
  .to(".box2", {
    duration:1.5,
    x: 800,
    ease: "expo.out",
  })
  .to(".box3", {
    duration:1.5,
    x: 800,
    ease: "expo.out",
  })
  .to(".box4", {
    duration:1.5,
    x: 800,
    ease: "expo.out",
  });

  play.addEventListener("click",()=>{
    tl.play()
  })
   pause.addEventListener("click",()=>{
    tl.pause()
  })
   restart.addEventListener("click",()=>{
    tl.restart()
  })
   reverse.addEventListener("click",()=>{
    tl.reverse()
  })