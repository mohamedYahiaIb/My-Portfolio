import React, { useEffect, useRef, useState } from 'react';
import '../styles/skills.css';

function Skills() {
    const skillsRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, { threshold: 0.25 });

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={skillsRef} id="skills-section" className={visible ? 'skills show' : 'skills'}>
            <div className="skills-content">
                <h1 className="skills-header">Skills:</h1>
                <div className="skills-list">

                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
                        height="100px"
                        alt="C Logo" 
                    />
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1920px-ISO_C%2B%2B_Logo.svg.png"
                        height="100px"
                        alt="C++ Logo" 
                    />

                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/250px-Python-logo-notext.svg.png"
                        height="100px"
                        alt="Python Logo" 
                    />

                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/500px-HTML5_logo_and_wordmark.svg.png"
                        height="100px"
                        alt="HTML Logo" 
                    />

                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1920px-CSS3_logo_and_wordmark.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
                        height="100px"
                        alt="CSS Logo" 
                    />

                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                        height="100px"
                        alt="JavaScript Logo" 
                    />

                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
                        height="100px"
                        alt="React Logo" 
                    />

                </div>
            </div>
            
        </section>
    );
}

export default Skills;