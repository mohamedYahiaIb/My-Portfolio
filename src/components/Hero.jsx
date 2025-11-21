import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import MyPic from '../assets/MyPic.jpg';

function Hero() {
    const phrases = [
        'Jr Frontend Developer',
        'React learner',
        '... and more to come!',
    ];

    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const displayDuration = 2500; // time each phrase is shown (ms)
        const fadeDuration = 500; // match CSS transition duration

        const fadeOutTimer = setTimeout(() => setFade(true), displayDuration);
        const switchTimer = setTimeout(() => {
            setIndex((i) => (i + 1) % phrases.length);
            setFade(false);
        }, displayDuration + fadeDuration);

        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(switchTimer);
        };
    }, [index]);

    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-media">
                    <img src={MyPic} alt="Profile" className="hero-avatar" />
                </div>

                <div className="hero-body">
                    <h1 className="hero-title">Welcome to My Portfolio</h1>

                    <h2
                        className={`hero-subtitle ${fade ? 'fade-out' : 'fade-in'}`}
                        aria-live="polite"
                    >
                        {phrases[index]}
                    </h2>

                    <p className="hero-tagline">Discover my projects and skills.</p>
                    <a href="#projects" className="hero-button">View Projects</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;