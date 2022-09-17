import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_balnk"><BsLinkedin/></a>
        <a href="https://github.com" target="_balnk"><FaGithub/></a>
        <a href="https://instagram.com" target="_balnk"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials