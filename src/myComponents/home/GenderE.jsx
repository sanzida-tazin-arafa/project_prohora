import React from 'react'
import { HashRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
import './GenderECss.css'
import GemainImage from '../images/gEImageM.png'
import GenderEquality from './GenderEquality/GenderEquality'
import WhatWeDo from './WhatWeDo/WhatWeDo'
import Title from './Title/Title'
import Reports from './Reports/Reports'
import News from './News/News'
import Stories from './Stories/Stories'


const GenderE = () => {
  return (
    <div>
      <GenderEquality/>
      <WhatWeDo/>
      <Title title='Reports' subtitle=''/>
      <Reports/>
      <Title title='News' subtitle=''/>
      <News/>
      <Title title='Stories' subtitle=''/>
      <Stories/>
    </div>
  )
}

export default GenderE
