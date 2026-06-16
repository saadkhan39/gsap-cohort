import "/src/index.css" 
import { gsap } from "gsap";
    
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(Draggable,InertiaPlugin,SplitText);

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





