import React from 'react'

const NavigationDots = ({ active }) => { // active tells which section currently on 
  return (
    <div className='app__navigation'>
      {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => (
          <a 
          href={`#${item}`} 
          key={item + index}
          className="app__navigation-dot"
          style={ active === item ? { backgroundColor: '#AFCEFA' } : {}} 
          />
      ))}
    </div>
  )
}

export default NavigationDots