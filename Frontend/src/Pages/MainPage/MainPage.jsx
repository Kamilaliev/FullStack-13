import React from 'react'
import Hero from '../HeroPage/Hero'
import Service from '../Services/Service'
import Plants from '../Plants/Plants'
import GreenPlant from '../GreenPlants/GreenPlant'
import LatesBlog from '../LatesBlog/LatesBlog'

function MainPage() {
  return (
    <div>
      <Hero/>
      <Service/>
      <Plants/>
      <GreenPlant/>
      <LatesBlog/>
    </div>
  )
}

export default MainPage
