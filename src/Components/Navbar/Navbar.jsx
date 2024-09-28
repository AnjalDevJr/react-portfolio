import React from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <a href="#"><img className='logo' src={logo} alt="" /></a>

      <ul className="nav-menu">
        <li><AnchorLink className='anchor-link' offset={() => 100} href='#home'>Home</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={() => 100} href='#about'>About</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={() => 100} href='#project'>Projects</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={() => 100} href='#contact'>Contact</AnchorLink></li>
      </ul>

      <button className="resume">
        My Resume
        <i class='bx bxs-download'></i>
      </button>
    </div>
  )
}

export default Navbar