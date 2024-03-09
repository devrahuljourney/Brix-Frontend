import React from 'react'
import HighLightText from '../common/HighLightText'
import img from '../../assets/code.png'
import "../../style/Techanology.css"
import TechTab from '../common/TechTab'
function Technology() {
  return (
    <div className='Techanlogy__container' >
        <div className='Tech__lower' >
            <HighLightText img={img} color={"#E18A25"} text1={"Technologies & Platforms"}  text2 = {"we use at The Brix"} />
        </div>

        <div className='tech__lower' >
            <TechTab/>
        </div>
    </div>
  )
}

export default Technology