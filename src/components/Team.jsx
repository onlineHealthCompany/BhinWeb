import React from 'react';
import '../App.css';
import Img1 from '../assets/Images/DOC.jpg';
import Img2 from '../assets/Images/VP.jpg';
import Img3 from '../assets/Images/JOKE.jpg';
import Img4 from '../assets/Images/prof.jpg';
import Img5 from '../assets/Images/prof2.jpg';
import Img6 from '../assets/Images/prof3.jpg';
import Img7 from '../assets/Images/Mr.jpg';
const TeamMember = ({ name, title, image }) => (
  <div className="member-card">
    <div className="member-container">
      <img 
        src={image} 
        alt={name}
        className="member-image"
      />
    </div>
    <h3 className="member-name">{name}</h3>
    <p className="member-title">{title}</p>
  </div>
);

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Temitope Farombi MBBS, FMCP (Neurology)',
      title: 'Founder and CEO',
      image: Img1
    },
    {
      name: 'Dr Elugbadebo',
      title: ' Vice President',
      image: Img2
    },
    {
      name: 'Olajoke Akinyemi, MPH',
      title: 'Program Manager',
      image: Img3
    },
    {
      name: 'Professor Jesse Abiodun',
      title: '',
      image: Img4
    },
    {
      name: 'Professor Temitope Alonge',
      title: '',
      image: Img5
    },
    {
      name: 'Professor Rufus Akinyemi',
      title: '',
      image: Img6
    },
    {
      name: 'Mr Olayinka Ajomale',
      title: '',
      image: Img7
    }
  ];

  return (
    <div className='Team'>
        <div className='container'>
            <div className="team-container">
                <h1 className="team-heading">Meet The Members Of Our Team</h1>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                    <TeamMember 
                        key={index}
                        name={member.name}
                        title={member.title}
                        image={member.image}
                    />
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default TeamPage;