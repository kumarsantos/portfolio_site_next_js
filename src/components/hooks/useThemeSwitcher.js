import React, { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
  const preferDarkQuery = '(prefer-color-scheme:dark)';
  const [mode, setMode] = useState('light');
  const theme = mode === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPreference = window.localStorage.getItem('theme');
    const handleChange = () => {
      if (userPreference) {
        let check = userPreference === 'dark' ? 'dark' : 'light';
        setMode(check);
        if (check === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } else {
        let check = mediaQuery.matches ? 'dark' : 'light';
        setMode(check);
        if (check === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };
    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => [mediaQuery.removeEventListener('change', handleChange)];
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(mode);
    root.classList.add(theme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', mode);
    }
  }, [mode, theme]);

  return [mode, setMode];
};

export default useThemeSwitcher;
