import React, { useState } from 'react';
import logo from '../../assets/brix_logo.png';
import '../../style/Navbar.css';
import { navLink } from '../../data/navLink';
import { aboutLink } from '../../data/aboutLink';
import { techLink } from '../../data/techLink';
import NavCard from './NavCard';
import { IoIosArrowDown } from "react-icons/io";
import { IoArrowDownOutline } from "react-icons/io5";

import { FaPhoneAlt } from "react-icons/fa";
import Search from './Search';

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <nav className='nav__container'>
      
      <div className='nav__logo__link nav__left' >
        <div className='nav__logo'>
           <img src={logo} alt='Brix Logo' />
        </div>
       <ul className='nav__link'>
      
        {navLink.map((ele, index) => (
          <li className=' nav__li ' key={index}>
            {ele === 'About' || ele === 'Techanologies' ? (
              <div
                className='nav__conditional'
                onMouseEnter={() => handleMouseEnter(ele)}
                onMouseLeave={handleMouseLeave}
              >
                <div className='nav__ele'>
                  <div className='nav_icon' >
                    <p>{ele}</p>
                    {hoveredLink ? <IoArrowDownOutline /> : <IoIosArrowDown />}
                  </div>
                  <div className='conditional__render' >
                  {hoveredLink === ele && (
                    <NavCard data={ele === 'About' ? aboutLink : techLink} />
                  )}
                  </div>
                </div>
              </div>
            ) : (
              <a href={`/${ele.toLowerCase()}`}>{ele}</a>
            )}
          </li>
          ))}
       </ul>
      </div>

      <div className='navbar__search nav__right'>
        <Search/>
        <button className='nav__contact_btn  search__btn' ><FaPhoneAlt /> Contact Us</button>
      </div>
    </nav>
  );
}
