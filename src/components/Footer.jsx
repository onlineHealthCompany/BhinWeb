import React from 'react';
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import Heri from '../assets/images/bhin-logo-removebg-preview.png'
import '../App.css';

const social = [
  { name: 'Facebook', url: 'https://www.facebook.com/share/1Arc29jQ7g/?mibextid=wwXIfr', Icon: Facebook },
  { name: 'Twitter', url: 'https://x.com/b_h_i_n?s=21', Icon: Twitter },
  { name: 'Instagram', url: 'https://www.instagram.com/brainhealthinitiativeng1?igsh=MXVqMnBsNjF6b3hqZQ==', Icon: Instagram },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/brain-health-initiative-nigeria?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', Icon: Linkedin },
];

const Footer = () => {
    return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">

          <div className="footer-brand">
            <div className="brand-header">
              <img src={Heri} alt="BHIN Logo" className="brand-logo" />
              <span className="brand-name">Brain Health Initiative Nigeria</span>
            </div>
            <p className="brand-description">
              Promoting awareness, dignity, and lifelong brain health for all.
            </p>
          </div>


          <div className="footer-links-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              {
                (function getLinks() {
                  const components = [
                    'About',
                    'Program',
                    'Impact',
                    'Team',
                    'Project',
                    'Contact',
                  ];

                  const base = [{ to: '/', label: 'Home' }];

                  const mapped = components.map((name) => {
                    const path = `/${name.toLowerCase()}`;
                    let label = name;
                    if (name === 'Program') label = 'Programs';
                    if (name === 'Project') label = 'Projects';
                    return { to: path, label };
                  });

                  return base.concat(mapped).map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} className="footer-link">
                        {link.label}
                        <span className="link-underline"></span>
                      </Link>
                    </li>
                  ));
                })()
              }
            </ul> 
          </div> 


          <div className="footer-contact-section">
            <h4 className="footer-heading">Contact</h4>
            <p className="contact-text">N0 3,Ayo- Adeshina Avenue,Behind Holy Trinity Grammer School, Old ife Road, Ibadan, Oyo state</p>
            <p className="contact-email">
              <Mail size={25} /> brainhealthinitiativeng@gmail.com
            </p>

            <div className="social-links">
              {social.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  title={s.name}
                  className="social-icon"
                >
                  <s.Icon size={18} className="icon" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-gradient-border"></div>
        

      <div className="footer-copyright">
        © {new Date().getFullYear()} Brain Health Initiative Nigeria. All rights reserved.
      </div>

    </div>
  )
}

export default Footer;


