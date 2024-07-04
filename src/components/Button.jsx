import React, { useContext } from 'react';
import { ThemeContext } from '../themes/ThemeContext';

const Button = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Cambiar a {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
};

export default Button;
