import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <>
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </label>
      <div className="wrapper">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Tech Projects</a></li>
          <li><a href="#">Creative Projects</a></li>
          <li><a href="#">Feedback</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
