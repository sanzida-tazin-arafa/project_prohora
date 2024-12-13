import React, { useState } from 'react';
import './Hero.css';
import dark_arrow from '../../images/dark-arrow.png';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Empowering Communities, Safeguarding Futures</h1><br />
        <p>"Prohora empowers communities to prepare, respond, and recover from flood disasters. Together, we champion climate resilience and gender equality for a safer, more sustainable future."</p><br />

        <form onSubmit={handleSearch} className='search-form'>
          <input
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='search-input'
          />
          <button type='submit' className='search-button'>
            <img src={dark_arrow} alt="Search" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Hero;

