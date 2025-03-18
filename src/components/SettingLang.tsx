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
        <button className="p-2 text-muted-foreground hover:text-primary bg-background hover:bg-muted rounded-full transition-colors shadow-sm border border-border">
          <Languages className="w-5 h-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background border border-border">
        {locales.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => changeLang(lang)}
            className={`flex items-center gap-2 text-foreground hover:bg-muted hover:text-primary cursor-pointer ${
              locale === lang ? 'bg-muted text-primary' : ''
            }`}
          >
            <span>{LANG_NAMES[lang as keyof typeof LANG_NAMES]}</span>
            {locale === lang && (
              <span className="ml-auto text-xs text-primary/70">
                {getCurrentLangLabel(locale as keyof typeof LANG_NAMES)}
              </span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
