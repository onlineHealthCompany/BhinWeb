import React from 'react';
import '../App.css';


const Hero = () => {
  return (
    < div className="hero">
      <div className="container">
        <div className="hero-sec">
          <div className="hero-text">
              <h1>Empowering Communities<br />for Lifelong Brain Health</h1>
              <p>
              Together, we are building healthier minds,<br />
              stronger families, and thriving communities.
              </p>

              <div className="hero-buttons">
                <button className="btn btn-learn">Learn More</button>
                <button className="btn btn-support">Support Us</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
