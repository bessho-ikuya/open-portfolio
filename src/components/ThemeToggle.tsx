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

  // テーマの切り替え処理
  const toggleTheme = () => {
    if (!theme) return;

    // ダークモードかどうかを判定
    const isDarkMode = theme === 'dark' || theme.endsWith('-dark');

    if (isDarkMode) {
      // ダークモードからライトモードへ切り替え
      if (theme === 'dark') {
        // 通常のダークテーマの場合は、ライトモードへ
        setTheme('light');
      } else if (theme.endsWith('-dark')) {
        // カラーテーマのダークモードの場合は、同じカラーのライトモードへ
        const lightTheme = theme.replace('-dark', '');
        setTheme(lightTheme);
      }
    } else {
      // ライトモードからダークモードへ切り替え
      if (theme === 'light') {
        // 通常のライトテーマの場合は、ダークモードへ
        setTheme('dark');
      } else if (theme.startsWith('theme-')) {
        // カラーテーマの場合は、同じカラーのダークモードへ
        const darkTheme = `${theme}-dark`;
        setTheme(darkTheme);
      }
    }
  };

  if (!mounted) {
    return (
      <button className="p-2 w-9 h-9 text-muted-foreground hover:text-primary bg-background hover:bg-muted rounded-full transition-colors shadow-sm border border-border" />
    );
  }

  // ダークモードかどうかの判定
  const isDarkMode = theme === 'dark' || (theme && theme.endsWith('-dark'));

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-muted-foreground hover:text-primary bg-background hover:bg-muted rounded-full transition-colors shadow-sm border border-border"
      title={isDarkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
    >
      {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
