import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/ajay-singh-1154b41b7/" target="_blank"><BsLinkedin/> </a>
        <a href="https://github.com/" target="_blank"><FaGithub/> </a>
        <a href="https://leetcode.com/ajay_leetcode/" target="_blank"><SiLeetcode /> </a>

    </div>
  )
}

export default HeaderSocials