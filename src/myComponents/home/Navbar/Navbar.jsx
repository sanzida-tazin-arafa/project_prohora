import React, {useEffect, useState} from 'react'
import { HashRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../images/logo.png'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
    },[]);


  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo" style={{ width: '45px', height: '42px' }} className="logo" />
      <ul>
      <Link to="/" ><li>HOME</li></Link>
      <Link to="/Climate" ><li>CLIMATE</li></Link>
      <Link to="/FloodMap" ><li>MAP</li></Link>
      <Link to="/FloodData" ><li>FLOOD DATA</li></Link>
      <Link to="/Alert" ><li>ALERT</li></Link>
      <Link to="/GenderE" ><li>GENDER EQUALITY</li></Link>
      <Link to="/JoinUs" ><li>JOIN US</li></Link>
      <Link to="/Help" ><li><button className='btn'>HELP</button></li></Link>
      </ul>
    </nav>
  )
}

export default Navbar
