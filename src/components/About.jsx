import React, { useState, useEffect, useRef } from 'react';
import '../styles/About.css';
import MyPicture from '../assets/my-picture.jpg';

function About() {

    const aboutRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, { threshold: 0.25 });

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={aboutRef} id="about-section" className={visible ? "about show" : "about"}>
            <div className="picture-container">
                <img src={MyPicture} alt="My img" className="my-pic" height="360px" width="360px" />
                <div className="name">
                    <h1>Hi, I am Mohamed Yahia Ibriz<span className='wave'>👋</span></h1>
                    <h2></h2>
                    <h3 className='about-me'>About me:</h3>
                    <p>
                        I am a passionate and dedicated junior front-end developer with a strong foundation in computer science. I'm on a continuous learning journey, eager to expand my skills and knowledge in computer science, web development, and more. I thrive in collaborative environments and am excited to contribute to innovative projects that make a difference.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
