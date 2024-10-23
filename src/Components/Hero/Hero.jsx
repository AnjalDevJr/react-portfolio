import React from 'react'
import './Hero.css'
import avatar from '../../assets/avatar.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img className='avatar' src={avatar} alt="" />
      <h1>I'm Anjal Thapa, Frontend Developer based in Nepal</h1>
      <AnchorLink href='#about' offset={() => 90}>
      <i class='bx bx-caret-down-circle'></i></AnchorLink>
    </div>
  )
}

export default Hero