import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <p>Creato da MettDev</p>
            <div className="social-icons">
                <a href="https://discord.gg/mFVfHBbJ3d" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-discord"></i>
                </a>
                <a href="https://www.instagram.com/mett.300?igshid=MXZrdWh0eWNkcnU5bw==" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
