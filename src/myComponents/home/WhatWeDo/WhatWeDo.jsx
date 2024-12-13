import React from 'react'
import './WhatWeDo.css'
import WhatWeDo_img from '../../images/WhatWeDo.png'
import play_icon from '../../images/play-icon.png'

const WhatWeDo = () => {
  return (
    <div className='WhatWeDo'>
      <div className='WhatWeDo-left'>
        <img src={WhatWeDo_img} alt="" className='WhatWeDo-img' />
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className='WhatWeDo-right'>
        <h3>What We Do</h3>
        <h2>Initiatives for Gender Equality in Flood</h2>
        <p>The Prohora project is committed to promoting gender equality and supporting flood-affected communities by addressing the unique challenges women and gender-diverse individuals face in climate crises. By integrating NASA’s satellite data, IoT technology, and dedicated educational resources, Prohora not only provides real-time flood alerts but also highlights gender-specific issues in disaster response. Our website features a dedicated section on gender equality that raises awareness about these challenges, offering resources and support tailored to empower women and gender-diverse individuals. Through educational campaigns, Prohora emphasizes the critical intersection between gender and climate, advocating for equal participation and representation in community-driven climate action. By fostering informed communities and facilitating direct access to disaster response support, Prohora works to ensure that gender equality remains a core focus in building resilience against climate change.</p>
      </div>
    </div>
    )
}

export default WhatWeDo