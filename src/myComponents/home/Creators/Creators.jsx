import React from 'react'
import './Creators.css'
import creator_1 from '../../images/creators-1.jpg'
import creator_2 from '../../images/creators-2.jpg'
import creator_3 from '../../images/creators-3.jpg'
import creator_4 from '../../images/creators-4.jpg'
import creator_5 from '../../images/creators-5.jpg'
import creator_icon_1 from '../../images/creator_icon_1.jpg'
import creator_icon_2 from '../../images/creator_icon_2.jpg'
import creator_icon_3 from '../../images/creator_icon_3.jpg'
import creator_icon_4 from '../../images/creator_icon_4.jpg'
import creator_icon_5 from '../../images/creator_icon_5.jpg'
import creator_icon_6 from '../../images/creator_icon_6.jpg'
import creator_icon_7 from '../../images/creator_icon_7.jpg'


const creators = () => {
  return (
    <div className='creators'>
      <div className='creator'>
        <img src={creator_1} alt="" />
        <div className="caption">
          <div className="icon-group">
            <img src={creator_icon_1} alt="" />
            <img src={creator_icon_2} alt="" />
          </div>
          <p>Team Leader &</p>
          <p>Backend Developer</p>
        </div>
      </div>
      <div className='creator'>
        <img src={creator_2} alt="" />
        <div className="caption">
          <img src={creator_icon_3} alt="" />
          <p>Frontend Developer</p>
        </div>
      </div>
      <div className='creator'>
        <img src={creator_3} alt="" />
        <div className="caption">
          <div className="icon-group">
            <img src={creator_icon_4} alt="" />
            <img src={creator_icon_3} alt="" />
          </div>
          <p>UI/UX Designer &</p>
          <p>Frontend Developer</p>
        </div>
      </div>
      <div className='creator'>
        <img src={creator_4} alt="" />
        <div className="caption">
          <img src={creator_icon_5} alt="" />
          <p>Content Writer &</p>
          <p>Researcher</p>
        </div>
      </div>
      <div className='creator'>
        <img src={creator_5} alt="" />
        <div className="caption">
          <div className="icon-group">
            <img src={creator_icon_6} alt="" />
            <img src={creator_icon_7} alt="" />
          </div>
          <p>IoT Developer &</p>
          <p>App Developer</p>
        </div>
      </div>
    </div>
  )
}

export default creators