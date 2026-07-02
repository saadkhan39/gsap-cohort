import React from 'react'
import {motion, scale} from "motion/react"

const App = () => {
  return (
    <div>
      {/* <div>
        <motion.div 
      className="box"
      initial={{x:0,y:0}}
      animate={{
        x:1000,
         rotate:360
      }}
      transition={{
        duration:2,
        delay:1
      }}
      >
      </motion.div>
      <motion.div 
      className="circle"
      initial={{x:0,y:0}}
      animate={{
        x:1000
      }}
      transition={{
        duration:2,
        delay:1
      }}
      >
      </motion.div>

      </div> */}

      {/* <motion.div className="box"
      animate={{
      x:[0,800,800,0,0],
      y:[0,0,300,300,0],
      rotate:[0,360,0,-360,0]
      }}
      transition={{
        duration:4,
        delay:1,
        ease:"anticipate"
      }}
      
      ></motion.div> */}

     {/* <motion.div className='box'
        drag
        whileDrag={{scale:0.8}}
        whileHover={{backgroundColor:"blue"}}
        dragConstraints={{
          left:0,
          top:0,
          right:100,
          bottom:200

        }}
        dragDirectionLock="true"
     > 
     </motion.div> */}

     

    </div>
  )
}

export default App