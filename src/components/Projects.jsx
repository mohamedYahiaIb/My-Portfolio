import React, { useEffect, useRef, useState } from 'react';
import '../styles/Projects.css';

const projectData = [
    {
        title: 'Portfolio Website',
        description: 'A modern personal portfolio built with React, designed to showcase my work, skills, and front-end development experience.',
        tags: ['React', 'CSS', 'Responsive'],
    },
    {
        title: 'DocNow',
        description: 'A clinical management Web App, I contributed in this project as a front-end developer.',
        tags: ['React', 'Tailwind', 'TypeScript'],
    },
    {
        title: 'RPG Creature Search App',
        description: 'A small Web App using Data fetching to search for RPG creatures',
        tags: ['HTML', 'CSS', 'JavaScript'],
    }
];

function Projects() {
    const projectsRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, { threshold: 0.25 });

        if (projectsRef.current) {
            observer.observe(projectsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const currentProject = projectData[currentIndex];

    return (
        <section ref={projectsRef} id="projects-section" className={visible ? 'projects show' : 'projects'}>
            <div className="projects-content">
                <div className="projects-header">
                    <h1>Projects:</h1>
                    <div className="project-arrows">
                        <button className="arrow" aria-label="Previous project" onClick={goToPrevious}>❮</button>
                        <button className="arrow" aria-label="Next project" onClick={goToNext}>❯</button>
                    </div>
                </div>

                <div className="project-showcase">
                    <article className="project-card active">
                        <span className="project-index">0{currentIndex + 1}</span>
                        <h2>{currentProject.title}</h2>
                        <p>{currentProject.description}</p>
                        <div className="tag-list">
                            {currentProject.tags.map((tag) => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </article>

                    <div className="project-dots" aria-label="Project navigation">
                        {projectData.map((project, index) => (
                            <button
                                key={project.title}
                                type="button"
                                className={index === currentIndex ? 'dot active' : 'dot'}
                                aria-label={`View ${project.title}`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;