import Header from './components/Header';
import GlobalStyle from './themes';
import { Routes, Route, Navigate } from 'react-router-dom';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';

const LOCAL_STORAGE_KEY = 'DEV_JOBS_THEME';

const StyledApp = styled.div``;

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem(LOCAL_STORAGE_KEY)
      ? localStorage.getItem(LOCAL_STORAGE_KEY)
      : 'light'
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, theme);
  }, [theme]);

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <StyledApp>
        <Header themeToggler={themeToggler} currentTheme={theme} />
        <Routes>
          <Route path="/" element={<Navigate to="/jobs" />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
        </Routes>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
