import { useEffect, useState } from 'react';

export default function ToggleTheme() {
    const localTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState<string>(localTheme || 'light');

    useEffect(() => {
        document.body.style.transition = 'all 0.3s ease-in-out';
    }, []);

    useEffect(() => {
        if (theme) {
            document.body.setAttribute('data-theme', theme);
        }
    }, [theme]);

    function handleToggleTheme() {
        if (theme === 'dark') {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        } else {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
    }

    return (
        <div>
            <button className='theme-button' onClick={handleToggleTheme}>
               { theme === 'dark' ? 'light' : 'dark'}
            </button>
        </div>
    );
}