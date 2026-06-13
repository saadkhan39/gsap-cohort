import "./index.css"
import { gsap } from "gsap";


gsap.to(".box1",{
    x:1000,
    delay:1,
    duration:2
})

gsap.from(".box2",{
    x:1000,
    delay:1,
    duration:2
})

gsap.fromTo(".box3",{
    x:0,  
},
{
    x:1000,
    y:200,
    delay:1,
    duration:2
})