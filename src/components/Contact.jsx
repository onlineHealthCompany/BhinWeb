import React, { useState } from 'react';
import '../App.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
   <div className='contact'>
        <div className='container'>
            <div className="contact-container">
                    <div className="left-section">
                        <h1>Your support makes a difference.</h1>
                        <p>
                            Join us in empowering communities and promoting lifelong brain health
                            through awareness, programs, and support.
                        </p>
                    </div>

                    <div className="right-section">
                        <h1 className="main-title">Contact us</h1>
                        
                        <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter You Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter You Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                            id="message"
                            name="message"
                            placeholder="Enter You Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            />
                        </div>

                        <button type="submit" className="send-btn">Send</button>
                        </form>
                    </div>
                    {/* 
                    <button className="subscribe-btn">
                        Subscribe<br />Now
                    </button> */}

                    <div className="decoration-circle"></div>
            </div>
        </div>
   </div>
  );
}
     
