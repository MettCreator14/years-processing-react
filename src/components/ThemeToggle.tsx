import React from 'react';

const ThemeToggle: React.FC = () => {
    const handleToggle = () => {
        document.body.classList.toggle('dark');
        const theme = document.body.classList.contains('dark') ? 'dark' : '';
        localStorage.setItem('theme', theme);
    };

    return (
        <div className="theme-toggle-container">
            <label className="theme-switch">
                <input type="checkbox" onChange={handleToggle} checked={document.body.classList.contains('dark')} />
                <span className="slider"></span>
            </label>
            <span className="toggle-label">Cambia Tema</span>
        </div>
    );
};

export default ThemeToggle;
