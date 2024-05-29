import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useState } from 'react'
import { useRef } from 'react'



const App = () => {
  const boxRef = useRef(null);

  const[tracker , setTracker] = useState(0);

  const btnClicked = ()=>{

    const abc = Math.floor(Math.random()*360)
    setTracker(abc)
    console.log("HIEEEEE!");
  }
  useGSAP(()=>{
    gsap.to(boxRef.current, {
     rotate : tracker,
     ease: "back",
     duration: 2,
     repeat: -1
  })
}, [tracker])
  return (
    <div className='main'>
      <button onClick={btnClicked}>Clicked</button>
      <h1 ref={boxRef} className='box'></h1>
    </div>
  )
}

export default App