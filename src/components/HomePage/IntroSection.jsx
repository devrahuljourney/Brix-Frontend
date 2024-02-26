import React, { useEffect, useState } from 'react';
import { introData } from '../../data/IntroData';
import Brix from './Brix';
import '../../style/Intro.css'

export default function IntroSection() {
  const [index, setIndex] = useState(0);
  const [background, setBackground] = useState(introData[index].image);
  const [text, setText] = useState(introData[index].text);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % introData.length;
      setBackground(introData[nextIndex].image);
      setText(introData[nextIndex].text);
      setIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]); 

  return (
    <div className='intro__home' style={{ backgroundImage: `url(${introData[index].image})`, transition: 'background-image 0.5s ease in ', flexDirection: 'column', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', gap:"10px" }}>
     <p style={{font:"bold", color:"white", fontSize:"32px" }} >We at</p>
      <div>
      <Brix>BRIX</Brix>
      </div>
      <p style={{font:"bold", color:"white", fontSize:"32px" }}> work to put <span style={{textDecoration:"underline"}} >spotlight </span> on projects like </p>
       <button className='intro__btn'  style={{font:"bold", color:"white", fontSize:"25px" }} > {text} </button>
    </div>
  );
}
