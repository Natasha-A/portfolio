import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonials.scss';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
     <h2 className="head-text">A little bit about <span>myself!</span></h2>

    <div className="aboutme">
    <div className="testimonial app__flex">
      <div className="about-text">
      Hello! My name is Natasha and I am a second year student studying Computer Programming & Analysis. So far, I have studied a diverse range of frontend and backend software technologies. This has  structured my ability to learn new technologies, and break down problems and solve them in large scale projects with confidence, as revealed through my portfolio. I have been programming and desiging since highschool, and ever since I have grown a love for the process of seeing an idea come to life. Additionally, for the past 2 years I have been working as a Coding and Robotics Instructor, teaching Web Development, Robotic Automation, and AI. This environment has fueled my love for collaborative learning, where I am eager to share my passion for technology with others! When I’m not coding or tinkering with open-source hardware, I enjoy painting, reading at the library, and playing soccer. Thanks for taking a look at my website! 
      </div>
      <div className="profile">
        <img src={images.aboutprofile}/>
      </div>
    </div>
      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);