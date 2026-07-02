import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'

const MoveX = ({children}) => {
const boxRef = useRef(null)

    useGSAP(()=>{
         gsap.to(boxRef.current,{
            x:500,
            duration:1,
            delay:0.5
         })
    })
  return (
    <div  ref={boxRef} className='box1'>
       {children} 
    </div>
  )
}

export default MoveX