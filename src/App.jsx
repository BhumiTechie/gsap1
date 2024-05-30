import { useGSAP } from '@gsap/react';
import gsap  from 'gsap';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

const App = () => {
const jackRef = useRef(null);
const cockRef = useRef(null);
const [cockMoveX, setCockMoveX] = useState(0);
const [cockMoveY, setCockMoveY] = useState(0);

const [jackMoveX, setJackMoveX] = useState(0);
const[jackMoveY, setJackMoveY] = useState(0);


const jackmoving =  (e)=>{
   setJackMoveX(e.clientX)
   setJackMoveY(e.clientY)
}


const cockroachesCaught = (e)=>{
  const randomX = Math.floor(Math.random()*1500);
  const randomY = Math.floor(Math.random()*800);
  setCockMoveX(randomX);
  setCockMoveY(randomY);
}

useGSAP(()=>{
   gsap.to(cockRef.current,{
    x:cockMoveX,
    y:cockMoveY,
    duration: 1,
    ease: "back",
   })

   gsap.to(jackRef.current,{
      x:jackMoveX,
      y:jackMoveY,
      duration: 1,
      ease: "back",
   })
},[jackMoveX, jackMoveY, cockMoveX, cockMoveY])

  return (
    <div className='main' onMouseMove={(e)=>{
        jackmoving(e)
    }}>
      <img className='jack' ref={jackRef} src="src/assets/jack.png" alt="" />
      <img className='cock' onClick={cockroachesCaught} ref={cockRef} src="src/assets/cock.png" alt="" />
    </div>
  );
}

export default App;
