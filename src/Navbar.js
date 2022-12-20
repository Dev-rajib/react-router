import React from 'react';
import "./css/style.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        
        <nav className="navbar">
            <div className='logo'>
                <img src='' alt='' />
            </div>
            <div className='links'>
                <li><Link to="" >Home</Link></li>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="service" >Services</Link></li>
                <li><Link to="portfolio" >Portfolio</Link></li>
                <li><Link to="contact" >Contact</Link></li>
            </div>
        </nav>
        
    </div>
  )
}

export default Navbar