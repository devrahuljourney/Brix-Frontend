import React from 'react'
import { companyLogo } from '../../data/companyLogo'
import "../../style/LogoSlider.css"
import layer3Image from "../../assets/Layer 3.png";
import HighLightText from '../common/HighLightText'
export default function LogoSlider() {
  return (
    <div className='silder__container' >
       <div className='slider__upper' >
          <div className='logo' ><img alt='logo'  src={require("../../assets/Layer 2.png")} /></div>
         <p>Trusted by world's leading organizations</p>
       </div>
        <div className='slider' >
            <div className='slide-track' >
                {
                    companyLogo.map((image,index) => (
                        <img key={index} src={image} alt='logo' />
                    ))
                }
                
            </div>
            <div className='slide-track' >
                {
                    companyLogo.map((image,index) => (
                        <img src={image} alt='logo' />
                    ))
                }
                
            </div>
        </div>
        <HighLightText text1='What The BRIX ' text2='can help you with ?' img = {layer3Image} color= '#34E125' />
        
    </div>
  )
}
