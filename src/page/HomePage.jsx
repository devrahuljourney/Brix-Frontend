import React from 'react'
import IntroSection from '../components/HomePage/IntroSection'
import LogoSlider from '../components/HomePage/LogoSlider'
import GlowCard from '../components/HomePage/GlowCard'
import SolutionSection from '../components/HomePage/SolutionSection'
import Technology from '../components/HomePage/Technology'

export default function HomePage() {
  return (
    <div>
        <IntroSection/>
        <LogoSlider/>
        <GlowCard/>
        <SolutionSection/>
        <Technology/>
    </div>
  )
}
