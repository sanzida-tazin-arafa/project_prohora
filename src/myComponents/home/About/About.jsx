import React from 'react'
import './About.css'
import about_img from '../../images/about.png'
import play_icon from '../../images/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
      </div>
      <div className='about-right'>
        <h3>ABOUT</h3>
        <h2>Bridging Technology and Humanitarian Efforts for Flood Response</h2>
        <p>Team Hydro’s project "Prohora" addresses the impacts of climate change, particularly floods, and their disproportionate effect on women and gender-diverse communities. The Prohora website uses NASA ‘s satellite data to provide real-time updates on potential flood zones via live maps. This information is constantly updated, offering communities access to critical insights about flood risks. The IoT devices deployed in flood-prone areas monitor water levels using ultrasonic sensors and water detection tools. When a flood is detected, the system alerts residence of the area by loud siren alarm. Also the device will send SMS messages to the nearby fire departments and NGOs for immediate response. Finally, the Prohora mobile app offers live satellite maps, weather forecasts, and educational content on climate change and gender equality. Prohora seeks to enhance sustainable development, promote gender equality, and build resilient communities, offering innovative tools to mitigate climate change's challenges.</p>
      </div>
    </div>
  )
}

export default About
