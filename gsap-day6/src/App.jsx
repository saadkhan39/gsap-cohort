import React from 'react'
import {useGSAP} from "@gsap/react"
import { useRef } from 'react'
import gsap  from 'gsap'
import MoveX from './components/MoveX'


const App = () => {

    const boxRef = useRef(null)
    const containerRef = useRef(null)
    useGSAP(()=>{
    gsap.to(boxRef.current,{
        x:700,
        duration:1,
        delay:0.5
    })
   },{
    scope:containerRef.current,
    dependencies:[],
    revertOnUpdate:true
   })
  return (
     
    <div>
        <div ref={boxRef} className='box'></div>
       <MoveX>
        <div className="box1"></div>
       </MoveX>
    </div>
  )
}

export default App