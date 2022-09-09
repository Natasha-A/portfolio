import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'



const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href="https://devpost.com/Natasha-A/">   
      <div >
          <SiDevpost  />
      </div>
      </a>

      <a href="https://github.com/Natasha-A">   
      <div>
        <BsGithub />
      </div>
      </a>

      <a href="https://www.linkedin.com/in/natasha003/">   
      <div>
        <BsLinkedin />
      </div>
      </a>
    </div>
  )
}

export default SocialMedia