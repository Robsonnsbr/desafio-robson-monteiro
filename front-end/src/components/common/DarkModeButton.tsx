import React from 'react';

interface DarkModeButtonProps {
  bodyRef: React.RefObject<HTMLBodyElement>;
}

const DarkModeButton: React.FC<DarkModeButtonProps> = ({ bodyRef }) => {
  const toggleDarkMode = () => {
    if (bodyRef.current) {
      bodyRef.current.classList.toggle('dark-mode');
    }
  };

  return <button onClick={toggleDarkMode}>Toggle Dark Mode</button>;
};

export default DarkModeButton;
