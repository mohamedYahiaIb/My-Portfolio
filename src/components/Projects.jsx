import React, { useEffect, useRef, useState } from 'react';
import '../styles/Projects.css';
import portfolioImage from '../assets/Projects-pics/portfolio.JPG';
import docNowImage from '../assets/Projects-pics/docnow.JPG';
import rpgCreatureImage from '../assets/Projects-pics/rpg-creature-search.JPG';

const projectData = [
    {
        title: 'Portfolio Website',
        description: 'A modern personal portfolio built with React, designed to showcase my work, skills, and front-end development experience.',
        tags: ['React', 'CSS', 'Responsive'],
        links: "https://github.com/mohamedYahiaIb/My-Portfolio",
        image: portfolioImage
    },
    {
        title: 'DocNow',
        description: 'A clinical management Web App, I contributed in this project as a front-end developer.',
        tags: ['React', 'Tailwind', 'TypeScript'],
        links: "secured",
        image: docNowImage
    },
    {
        title: 'RPG Creature Search App',
        description: 'A small Web App using Data fetching to search for RPG creatures',
        tags: ['HTML', 'CSS', 'JavaScript'],
        links: "https://github.com/mohamedYahiaIb/rpg-creature-search-app",
        image: rpgCreatureImage
    }
];

function Projects() {
    const projectsRef = useRef(null);
    const touchStartX = useRef(null);
    const [visible, setVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('right');
    const [previewImage, setPreviewImage] = useState(null);

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
        setDirection('left');
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setDirection('right');
        setCurrentIndex((prevIndex) =>
            prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToProject = (index) => {
        setDirection(index > currentIndex ? 'right' : 'left');
        setCurrentIndex(index);
    };

    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event) => {
        if (touchStartX.current === null) return;

        const touchEndX = event.changedTouches[0].clientX;
        const swipeDistance = touchStartX.current - touchEndX;

        if (Math.abs(swipeDistance) > 50) {
            if (swipeDistance > 0) {
                goToNext();
            } else {
                goToPrevious();
            }
        }

        touchStartX.current = null;
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
                    <article
                        key={`${currentProject.title}-${direction}`}
                        className={`project-card active ${direction === 'left' ? 'slide-left' : 'slide-right'}`}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <span className="project-index">0{currentIndex + 1}</span>

                        <div className="project-layout">
                            <div className="project-text">
                                <h2>{currentProject.title}</h2>
                                <p>{currentProject.description}</p>

                                <div className="project-links">
                                    {currentProject.links === 'secured' ? (
                                        <span className="project-link secured">🔒 Secured</span>
                                    ) : (
                                        <a
                                            href={currentProject.links}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-link"
                                        >
                                            🌐 Visit Project
                                        </a>
                                    )}
                                </div>

                                <div className="tag-list">
                                    {currentProject.tags.map((tag) => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <button
                                type="button"
                                className="project-image-button"
                                aria-label={`Preview ${currentProject.title}`}
                                onClick={() => setPreviewImage({ src: currentProject.image, title: currentProject.title })}
                            >
                                <img
                                    src={currentProject.image}
                                    alt={`${currentProject.title} preview`}
                                    className="project-image"
                                />
                            </button>
                        </div>
                    </article>

                    <div className="project-dots" aria-label="Project navigation">
                        {projectData.map((project, index) => (
                            <button
                                key={project.title}
                                type="button"
                                className={index === currentIndex ? 'dot active' : 'dot'}
                                aria-label={`View ${project.title}`}
                                onClick={() => goToProject(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {previewImage && (
                <div className="image-preview-backdrop" onClick={() => setPreviewImage(null)}>
                    <div className="image-preview-modal" onClick={(event) => event.stopPropagation()}>
                        <button
                            type="button"
                            className="image-preview-close"
                            onClick={() => setPreviewImage(null)}
                            aria-label="Close preview"
                        >
                            ×
                        </button>
                        <img src={previewImage.src} alt={previewImage.title} className="image-preview" />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;