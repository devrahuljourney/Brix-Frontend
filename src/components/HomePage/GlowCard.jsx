import React, { useEffect } from 'react'
import {glowCardData}  from '../../data/glowCardData'
import { Link } from 'react-router-dom'
import '../../style/GlowCard.css'

export default function GlowCard() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Iterate over each card and update the glow effect
      glowCardData.forEach((_, index) => {
        const cardElement = document.querySelector(`.card:nth-child(${index + 1})`);
        const boundingRect = cardElement.getBoundingClientRect();
  
        // Calculate mouse position relative to the current card
        const mouseX = e.clientX - boundingRect.left;
        const mouseY = e.clientY - boundingRect.top;
  
        // Set the custom properties to the mouse position
        cardElement.querySelector('.light').style.setProperty('--x', mouseX + 'px');
        cardElement.querySelector('.light').style.setProperty('--y', mouseY + 'px');
      });
    };
  
    document.documentElement.addEventListener("mousemove", handleMouseMove);
  
    return () => {
      document.documentElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  
  return (
    <div className='glowcard__container' >
        
        <div className='glowcard__lower' >
            {
                glowCardData.map((ele,index) => (
                    <div key={index} className='card' >
                      <p  className='card__title' > {ele.title} </p>
                      <p className='card__description' > {ele.description} </p>
                      <Link className='link' to = {ele.link} >Learn More {'>'} </Link>
                      <div className='light' ></div>
                    </div>
                ))
            }
            
        </div>
        <div className='light'></div>
        
    </div>
  )
}
