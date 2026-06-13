import { gsap } from "gsap";
import "/src/index.css"


// gsap.set(".box",{
//     x:-500
// })

// gsap.to(".box",{
//     x:1500,
//     // delay:1,
//     duration:1.5,
//     ease: "power4.in",
//     // ease:"power4.out",
//     // ease:"power4.inOut" ,
//     // ease: "bounce.in",
//     // ease: "elastic.in(1,0.3)",
//     // ease: "expo.in",
//     // ease: "back.in(1.7)",
//     // ease: "steps(12)",
//     repeat:-1,
//     // yoyo:true

// })


// callback functions

gsap.to(".box",{
    x:800,
    delay:1,
    duration:2.5,
    ease:"power3.in",


    onStart:()=>{
        console.log("animation started");   
    },

    onComplete:()=>{
        console.log("animation completed"); 
    },

    onUpdate:()=>{
       console.log("farmes");
       
    }

})