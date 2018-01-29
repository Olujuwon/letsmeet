import React from 'react';
import '../css/header.css';
//import NavLink from 'react-router-dom/NavLink';
import { NavLink} from 'react-router-dom';


const Header =()=>{
    return (
        <div className="head">
          <h1>Let's Talk</h1>
          <p>Think you have what it takes? Show us.</p>
          <NavLink activeClassName= "active" to="/" isActive={(match, location)=>{
            return location.pathname==='/' || location.pathname==='/home'}} className="NavLink">Home</NavLink>
          <NavLink to="/personal" activeClassName= "active" className="NavLink">Personal</NavLink>
          <NavLink to="/skills" activeClassName= "active" className="NavLink">Skills</NavLink>
          <NavLink to="/portfolio" activeClassName= "active" className="NavLink">Portfolio</NavLink>

        </div>
      );
} 

    


export default Header;