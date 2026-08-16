import React, { useEffect, useRef, useState } from 'react';
import '../styles/Contacts.css';
import gmailIcon from '../assets/Contacts-pics/gmail.png';
import githubIcon from '../assets/Contacts-pics/github.png';
import facebookIcon from '../assets/Contacts-pics/facebook.png';
import instagramIcon from '../assets/Contacts-pics/instagram.png';
import linkedinIcon from '../assets/Contacts-pics/linkedin.png';

const contactData = [
    {
        name: 'Gmail',
        icon: gmailIcon,
        href: 'https://mail.google.com/mail/?view=cm&fs=1&to=mohamedyahia9ib@gmail.com',
    },
    {
        name: 'GitHub',
        icon: githubIcon,
        href: 'https://github.com/mohamedYahiaIb',
    },
    {
        name: 'Facebook',
        icon: facebookIcon,
        href: 'https://facebook.com/mohYahiaIbriz/',
    },
    {
        name: 'Instagram',
        icon: instagramIcon,
        href: 'https://instagram.com/0rion__pax/',
    },
    {
        name: 'LinkedIn',
        icon: linkedinIcon,
        href: 'https://linkedin.com/in/mohamed-yahia-ibriz/',
    },
];

function Contacts() {
    const contactsRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, { threshold: 0.25 });

        if (contactsRef.current) {
            observer.observe(contactsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={contactsRef} id="contacts-section" className={visible ? 'contacts show' : 'contacts'}>
            <div className="contacts-content">
                <h1>Contact Me</h1>

                <div className="contacts-grid">
                    {contactData.map((contact) => (
                        <a
                            key={contact.name}
                            href={contact.href}
                            target='_blank'
                            rel='noreferrer'
                            className="contact-card"
                        >
                            <img src={contact.icon} alt={contact.name} className="contact-icon" />
                            <span className="contact-name">{contact.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contacts;
