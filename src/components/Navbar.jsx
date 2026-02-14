import '../styles/Navbar.css';

function Navbar() {
    return (
        <section className="hero">
            <nav className="header">    
                <ul className= "header-text">   
                    <a href="#about-section" id="about">About</a>
                    <a href="#skills-section" id="skills">Skills</a>
                    <a href="#projects-section" id="projects">Projects</a>
                    <a href="#contacts-section" id="contacts">Contacts</a>
                </ul>
            </nav>
        </section>
    )
}

export default Navbar;

