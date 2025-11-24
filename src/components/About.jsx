import React from 'react';
import '../App.css';
import Heri from '../assets/images/cont.jpg'

const About = () => {
  return (
    <section className="about">
        <div className="container">
            <div className="about-bhin">
                <div className='about-header'>
                    <h1>About BHIN</h1>
                </div>

                <div className='about-content'>
                    <div className='about-sec'>
                        <h1>Vision Statement</h1>
                        <p>To empower individuals and communities to maintain lifelong healthy brain ageing.</p>
                        
                        <h1>Mission Statement</h1>
                        <p>To promote dementia and strokes awareness and engage unhealthy brain practices and perceptions.</p>
                        
                        <h1>Our Goal</h1>
                        <p>To build brain healthy older adults by filling knowledge gaps about the impact of modifiable risk factors 
                            on brain health in Nigeria. We aim to raise awareness in the community about brain health literacy, 
                            healthy lifestyle choices, dementia, and stroke prevention.</p>
                    </div>

                    <div className='about-image'>
                        <img src={Heri} alt="" />
                    </div>
                </div>
            </div>   
        </div>
    </section>

  );
};

export default About;
