import React from 'react'
import './Header.scss'
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper'

const scaledVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

export const Header = () => {
  return (
    <div>
      <div className="app__header app__flex">
        <motion.div
         whileInView={{ y: [100, 0], opacity: [0, 1] }}
         transition={{ duration: 0.5 }}
         className="app__header app__header-info">
          <div className="app__header-text  app__header-text1">Hello there!</div>
          <div className="app__header-text  app__header-text2">My name is Natasha Ahammed :)</div>
          <div className="app__header-text  app__header-text3">I like to design, tinker, and make new things.</div>
          <div className="">
          <a href="#about"><button  className='app__header-button'>LEARN MORE</button></a>
          </div>
        </motion.div>

        <div className="app__header section-2">
        <motion.div
        whileInView={{opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren:0.5 }}
        className="app__header-img"
      >
        <img src={images.jumbotronimg} alt="profile_bg"/>
        <motion.img
         whileInView={{scale: [0, 1] }}
         transition={{ duration: 1, ease:'easeInOut'}}
         src={images.circle}
         alt='profile-circle'
         className='overlay_circle'
        />
      </motion.div>
        </div>

      </div>
    </div>
  )
}

export default AppWrap(Header, 'home');
