import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.facebook.com/profile.php?id=100006995024917" target="_blank"><FaFacebookF/></a>
        <a href="https://www.instagram.com/tobias_lenander01/" target="_blank"><FiInstagram/></a>
    </div>
  )
}

export default HeaderSocials