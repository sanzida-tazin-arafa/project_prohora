import React from 'react'
import Hero from './Hero/Hero'
import Creators from './Creators/Creators'
import Title from './Title/Title'
import About from './About/About'

const HomeM = () => {
  return (
    <div>

      <Hero />
      <div className='container'>
        <About />
        <Title title='PROHORA' subtitle='creators' />
        <Creators />

      </div>
    </div>
  )
}

export default HomeM
