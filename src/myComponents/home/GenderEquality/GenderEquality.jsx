import React from 'react';
import './GenderEquality.css';
import Gender_Equality from "../../images/GenderEquality.png"

const GenderEquality = () => {
  return (
    <div className="gender-equality-section">
      <h1>Gender equality</h1>
      <p className="subtitle">
        Societies that protect equal rights for girls and boys create benefits for everyone.
      </p>
      <ul className="menu">
        <li><a href="#what-we-do">What we do</a></li>
        <li><a href="#reports">Reports</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#stories">Stories</a></li>
      </ul>
      <div className="image-container">
        <img
          src={Gender_Equality}
          alt="Gender Equality Icon" style={{ width: '411px', height: '220px' }}
        />
      </div>
    </div>
  );
};

export default GenderEquality;
