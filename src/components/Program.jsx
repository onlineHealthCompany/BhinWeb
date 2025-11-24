import React from "react";
import '../App.css'
import Product3 from '../assets/Images/Brain-lit.jpeg';
import Product1 from '../assets/Images/older.jpg';
import Product2 from '../assets/Images/Ct.JPG';
import Product4 from '../assets/Images/Sch.jpg';

const Program = () => {
    const Images = [
    {
      id: 1,
      src: Product1,
      title: "Older Adults Empowerment",
      description: "we empowers older adults in the community by providing education, resources, and support to help them manage and prevent brain-related illnesses. The initiative focuses on raising awareness about cognitive health, offering training programs on maintaining brain health through diet, exercise, and mental stimulation. "
    },

    {
      id: 2,
      src: Product2,
      title: "Caregiver Training and Support",
      description: "We conduct quarterly Basic Caregivers’ Training for aspiring caregivers and caregivers of the elderly to promote healthy aging.The training sessions focus on educating trainees on age-related problems such as brain illnesses, early signs, the importance of early diagnosis, treatment options, and the role of preventive care in managing brain illnesses."
    },

    {
      id: 3,
      src: Product3,
      title: "Brain Literacy",
      description: "BHIN literacy project tagged ‘training the trainers’ seeks to inform and educate various target populations at various times on the importance of preserving brain health over the course of a person's life. This is achieved through a series of seminars, workshops, and interactive sessions."
    },
    {
      id: 4,
      src: Product4,
      title: "School Brain Health Program",
      description: "The School Brain Health Program is an initiative aimed at promoting brain health and cognitive development among school-aged children. The program focuses on educating students, teachers, and parents about the importance of brain health, healthy lifestyle choices, and strategies to enhance learning and memory."
    },
    ]
    return (
        <div className="pro-section">
            <div className="container">
                <div className="pro-container">
                    <div className="pro-header">
                        <h1>Our Programs</h1>
                        <p>Bhin offers range off programs to empower individuals, community and caregivers</p>
                    </div>

                    <div className="image-gallery">
                        {Images.map((image) => (
                        <div key={image.id} className="image-card">
                            <div className="image-container">
                            <img 
                                src={image.src} 
                                alt={image.alt}
                                className="gallery-image"
                            />
                            <div className="overlay">
                                <div className="overlay-content">
                                <h3 className="overlay-title">{image.title}</h3>
                                <p className="overlay-description">{image.description}</p>
                                </div>
                            </div>
                            </div>
                            <h3 className="image-title">{image.title}</h3>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Program