import React from 'react';
import '../App.css'

const Impact = () => {
    const stats = [
        { number:"17+", label:"School Programs" },
        { number:"55+", label:"Caregiver's Trained" },
        { number:"200+", label:"Older Adult Empowerment" },
    ];
    
    return (
        <div className="impact">
            <div className="container">
                <div className="impact-container">
                    <div className="impact-title">
                        <h1>Our Impact</h1>
                    </div>

                    <div className="impact-row">
                        {stats.map((stat, idx) => (
                        <div className="impact-stat" key={idx}>
                            <div className="impact-number">{stat.number}</div>
                            <div className="impact-label">{stat.label}</div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Impact;