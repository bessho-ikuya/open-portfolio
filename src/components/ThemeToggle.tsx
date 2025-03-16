'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 w-9 h-9 text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-100 rounded-full transition-colors shadow-sm border border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-700" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-100 rounded-full transition-colors shadow-sm border border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
}
