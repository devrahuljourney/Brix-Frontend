import React from 'react';
import HighLightText from '../common/HighLightText';
import laptop from '../../assets/laptop.png';
import '../../style/WeWorkSectionn.css';
import { weWorkData } from '../../data/weWorkData';

export default function WeWorkSection() {
  return (
    <div className='work__container'>
      <div className='container__upper'>
        <HighLightText text1={'How We Work'} text2={'at the Brix ?'} img={laptop} color={'#25D5E1'} />
      </div>

      <div className='container__lower'>
        {weWorkData.map((data, index) => (
          <React.Fragment key={index}>
            <div style={{ color: `${data.color}` }} className='work__card'>
              <div className='card__img'>
                <img className='img' src={data.img} alt='img' />
                <img className='hover-img' src={data.hover} alt='img' />
              </div>
               <div className='work__card__lower' >
               <h1>{data.h1}</h1>
                 <div>
                <p>{data.p1}</p>
                <p>{data.p2}</p>
                <p>{data.p3}</p>
                 </div>
               </div>
            </div>
            
            {index !== weWorkData.length - 1 && <div className='border'></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
