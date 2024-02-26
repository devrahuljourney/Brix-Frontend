import React from 'react'
import '../../style/HighLightText.css'
export default function HighLightText({text1, text2, color,img}) {
    const inlineStyle = {
        
        boxShadow: `0 0 10px ${color}, 0 0 40px ${color}, inset 0 0 10px ${color}, inset 0 0 40px ${color}`,
        backgroundColor: color,
      };
  return (
    <div className='slider__lower' >
            <div className='slider__lower__logo' >
                <div className='logo logo__lower' style={inlineStyle} ><img  src = {img} alt='logo' /></div>
                <p  className='slider__lower__logo__title' style={{color:color}}  > {text1} <p className='slider__lower__title' > {text2} </p> </p>
            </div>
            
    </div>
  )
}
