import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 bg-muted rounded-full p-1 transition-colors duration-300 hover:bg-muted/80"
      aria-label="Toggle dark mode"
    >
      <div
        className={`absolute top-1 w-5 h-5 rounded-full bg-background shadow-sm transition-transform duration-300 flex items-center justify-center ${
          isDark ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {isDark ? (
          <Moon size={12} className="text-primary" />
        ) : (
          <Sun size={12} className="text-primary" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
