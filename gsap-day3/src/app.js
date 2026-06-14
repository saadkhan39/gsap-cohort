import { gsap } from "gsap";
import "/src/index.css"

//stagger animation with boxes
// gsap.to(".box",{
//     x:600,
//     duration:1.5,
//     delay:1,
//     ease:"power2.out",
//     // stagger:0.5,
//     // stagger:-0.5,
//     stagger:{
//         each:0.5,
//         // from:"start",
//         // from:"center",
//         // from:"random"
//     }

// })

// stagger animation
// gsap.from("span ",{
//     duration:1.3,
//     yPercent:100,
//     ease:"back.out",
//     opacity:0,
//     stagger:{
//         each:0.1,
//         from:"center"
//     }
// })


// timeline (position parameters)
const tl = gsap.timeline()
tl.to(".box1",{
    x:700,
    duration:1.3,
    ease:"power2.out",
    delay:1
},"saad").to(".box2",{
    x:700,
    duration:1.3,
    ease:"power2.out",
    rotate:180
}).to(".box3",{
    x:700,
    duration:1.3,
    ease:"power2.out"
}).to(".box4",{
    x:700,
    duration:1.3,
    ease:"power2.out",
     rotate:180,
     delay:1
   
},"saad-=0.3")


