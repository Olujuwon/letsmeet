import React from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom'

const Header =()=>{
    return (
        <div className="head">
          <h1>Let's Talk</h1>
          <p>Think you have what it takes? Show us.</p>
          <Link to="/" className="link">Home</Link>
          <Link to="/personal" className="link">Personal</Link>
          <Link to="/skills" className="link">Skills</Link>
          <Link to="/portfolio" className="link">Portfolio</Link>
        </div>
      );
} 

    


export default Header;