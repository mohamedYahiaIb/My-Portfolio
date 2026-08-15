import React, { useEffect, useRef, useState } from 'react';
import '../styles/Projects.css';


function Projects() {
    const projectsRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, { threshold: 0.25 });

        if (projectsRef.current) {
            observer.observe(projectsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={projectsRef} id="projects-section" className={visible ? 'projects show' : 'projects'}>
            <div className="projects-content"></div>
        </section>
    );
}

export default Projects;