import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import { DownloadIcon } from './components/Navbar/styles';
import Hero from './components/Hero';

import Theme from './assets/icons/theme.svg';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <button
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1001,
        padding: '10px 15px',
        backgroundColor: theme === 'dark' ? '#f0f0f0' : '#333',
        color: theme === 'dark' ? '#333' : '#f0f0f0',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
      
      >
        <DownloadIcon src={Theme} alt="Theme change Icon" />
      </button>

      <Navbar />
      <Hero/>
    </>
  );
}

export default App;
