import "/src/index.css" 
import { gsap } from "gsap";
    
import { Draggable } from "gsap/Draggable";
import { Flip } from "gsap/Flip";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(Draggable,Flip,InertiaPlugin,SplitText);

// Split Text Plugin
// const tl = gsap.timeline()
// let splitHeading = new SplitText(".title h1", {
//     type: "chars, words, lines",
//     wordsClass: "titleWords",
//     charsClass: "titleChars"
// })
// let splitPara = new SplitText(".title p", {
//     type: "chars, words ,lines",
//     wordsClass: "titleWords",
//     charsClass: "titleChars"
// })

// tl.from(splitHeading.words,{
//     yPercent:100,
//     duration:1,
//     ease:"power3.out",
//     opacity:0,
//     stagger:{
//         each:0.2,
//         from:"start"
//     }
// }).from(splitPara.lines,{
//     yPercent:100,
//     duration:1,
//     ease:"power3.out",
//     opacity:0,
//     stagger:{
//         each:0.2,
//         from:"start"
//     }
// })


// // Draggable Plugin
// Draggable.create(".box",{
//     bounds:"main"
// })


// Inertia Plugin
// Draggable.create(".box",{
//     bounds:"main",
//     edgeResistance:1,
//     inertia:true,
//     dragResistance:0.2
// })

// FLIP PLUGIN
const img = document.querySelector(".specialImage")
const img2 = document.querySelector(".specialImage2")
img.addEventListener("click",()=>{
    const state = Flip.getState(img)
    const state2 = Flip.getState(img2)
    document.querySelector(".imageShow").appendChild(img)
    document.querySelector(".imageGallery").appendChild(img2)

    Flip.from(state,{
        duration:0.8,
        ease:"power3.inOut",
        absolute:true,
        scale:true
    })
    Flip.from(state2,{
        duration:0.8,
        ease:"power3.inOut",
        absolute:true,
        scale:true
    })
})








