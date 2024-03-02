// SolutionSection.js
import React from 'react';
import HighLightText from '../common/HighLightText';
import box from '../../assets/box.png';
import SolutionCard from '../common/SolutionCard';
import '../../style/SolutionSection.css';

export default function SolutionSection() {
  return (
    <div className='solution__container'>
      <HighLightText text1='Solutions we deliver' text2='at The Brix' img={box} color='#D225E1' />
      <div className='scrollable__container'>
        <SolutionCard />
      </div>
    </div>
  );
}
