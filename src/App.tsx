import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

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
          padding: '8px',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme === 'dark' ? '#f0f0f0' : '#333',
          color: theme === 'dark' ? '#333' : '#f0f0f0',
          border: 'none',
          cursor: 'pointer',
          fontSize: '20px',
          boxShadow: '0px 2px 5px rgba(0,0,0,0.2)',
          transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.2s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>

      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;