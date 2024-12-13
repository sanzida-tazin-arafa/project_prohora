import React from 'react'
import { HashRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div style={{ height: '40px' }}></div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}