import React, { useState } from 'react';
import { solutionData } from '../../data/solutionData.js';
import '../../style/SolutionSection.css';

export default function SolutionCard() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='card__container'>
      {solutionData.map((data, index) => (
        <div  onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          className='button' 
          key={index} 
          style={{ 
            boxShadow: hoveredIndex === index && `0 0 10px ${data.color}, 0 0 40px ${data.color}, inset 0 0 10px ${data.color}, inset 0 0 40px ${data.color} , `,
            background: hoveredIndex === index && ` ${data.color} `, 
            border: `1px solid ${data.color}`
          }}
        >
          <a
            className='link'
            href={data.link}
            
          >
            {data.name}
          </a>
        </div>
      ))}
    </div>
  );
}
