'use client';
import { Languages } from 'lucide-react';
import useLang from '@/hooks/use-lang';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LANG_NAMES = {
  ja: '日本語',
  en: 'English',
} as const;

export default function SettingLang() {
  const { locale, locales, changeLang } = useLang();

  const getCurrentLangLabel = (locale: keyof typeof LANG_NAMES) => {
    switch (locale) {
      case 'ja':
        return '現在の言語';
      case 'en':
        return 'Current';
      default:
        return '';
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-100 rounded-full transition-colors shadow-sm border border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
          <Languages className="w-5 h-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      >
        {locales.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => changeLang(lang)}
            className={`flex items-center gap-2 text-gray-700 hover:bg-gray-50 cursor-pointer dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100 ${
              locale === lang ? 'bg-gray-100 dark:bg-gray-700' : ''
            }`}
          >
            <span>{LANG_NAMES[lang as keyof typeof LANG_NAMES]}</span>
            {locale === lang && (
              <span className="ml-auto text-xs text-gray-500 dark:text-gray-400">
                {getCurrentLangLabel(locale as keyof typeof LANG_NAMES)}
              </span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
