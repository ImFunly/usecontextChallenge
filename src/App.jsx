import React, { useContext } from 'react';
import RoutesApp from './routes/RoutesApp';
import { ThemeContext, ThemeProvider } from './themes/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <RoutesAppWrapper />
    </ThemeProvider>
  );
};

const RoutesAppWrapper = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`App ${theme}`}>
      <RoutesApp />
    </section>
  );
};

export default App;
