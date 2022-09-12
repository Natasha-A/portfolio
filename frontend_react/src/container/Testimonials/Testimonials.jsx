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
      Hi there! My name is Natasha and I am a second year student studying Computer Programming & Analysis. So far, I have studied a diverse range of frontend and backend software technologies. This has structured my ability to learn new technologies, break down problems, and create effective solutions in large-scale projects, as revealed through my diverse portfolio. Ever since I was introduced to design and coding in high school, I have grown to love the process of making an idea come to life. Additionally, for the past 2 years I have been working as a Coding and Robotics Instructor, teaching a variety of subjects including Web Development, Robotic Automation, and Computer Vision. This environment has fueled my love for collaborative learning, where I am eager to share my passion for technology with others! When I’m not coding or tinkering with open-source hardware, I enjoy painting, reading at the library, and playing soccer with friends. Thanks for visiting my website! 
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