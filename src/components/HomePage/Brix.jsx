// Brix.js
import React, { useEffect } from 'react';
import "../../style/Brix.css";

export default function Brix({ children }) {
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const brixElement = document.querySelector('.brix');
      const boundingRect = brixElement.getBoundingClientRect();

      // Calculate mouse position relative to the Brix component
      const mouseX = e.clientX - boundingRect.left;
      const mouseY = e.clientY - boundingRect.top;

      // Set the custom properties to the mouse position
      brixElement.style.setProperty('--x', mouseX + 'px');
      brixElement.style.setProperty('--y', mouseY + 'px');
    };

    document.documentElement.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.documentElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  

  return (
    <div className='brix' style={{ position: 'relative' }}>
      <p className='text' > {children} </p>
      <div className='light'></div>
    </div>
  );
}
