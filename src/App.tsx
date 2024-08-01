import React, { useEffect, useState } from 'react';
import './styles.css';
import ProgressBar from './components/ProgressBar';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [progress, setProgress] = useState<number>(0);
    const [currentDateTime, setCurrentDateTime] = useState<string>('');
    const [daysPassed, setDaysPassed] = useState<number>(0);
    const [daysRemaining, setDaysRemaining] = useState<number>(0);
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const updateProgressBar = () => {
            const now = new Date();
            const start = new Date(now.getFullYear(), 0, 1);
            const end = new Date(now.getFullYear() + 1, 0, 1);
            const yearProgress = ((now.getTime() - start.getTime()) / (end.getTime() - start.getTime())) * 100;
            setProgress(yearProgress);
        };

        const updateDetails = () => {
            const now = new Date();
            const start = new Date(now.getFullYear(), 0, 1);
            const end = new Date(now.getFullYear() + 1, 0, 1);
            const daysPassed = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
            const daysRemaining = Math.floor((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
            const dayNames = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
            const dayName = dayNames[now.getDay()];
            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const year = now.getFullYear();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const formattedDate = `${dayName}, ${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
            setCurrentDateTime(formattedDate);
            setDaysPassed(daysPassed);
            setDaysRemaining(daysRemaining);
        };

        updateProgressBar();
        updateDetails();

        const interval = setInterval(() => {
            updateProgressBar();
            updateDetails();
        }, 1000); // Aggiorna ogni secondo

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark');
        }
    }, []);

    return (
        <div className="container">
            <h1>Percentuale di Caricamento dell'Anno {currentYear}</h1>
            <ProgressBar progress={progress} />
            <p id="percentage">{progress.toFixed(2)}%</p>
            <div id="details">
                <p>Oggi è {currentDateTime}</p>
                <p>Giorni passati dall'inizio dell'anno: {daysPassed}</p>
                <p>Giorni mancanti alla fine dell'anno: {daysRemaining}</p>
            </div>
            <ThemeToggle />
            <Footer />
        </div>
    );
};

export default App;
