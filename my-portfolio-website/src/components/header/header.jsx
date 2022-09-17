import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.png'
import HeaderSocial from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Deepak Jose</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="me" className='meimg'/>
        </div>
        <HeaderSocial />
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header