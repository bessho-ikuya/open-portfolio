'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  console.log(props.defaultTheme);
  return (
    <NextThemesProvider
      {...props}
      defaultTheme={props.defaultTheme}
      themes={[
        'light',
        'dark',
        'theme-blue',
        'theme-green',
        'theme-purple',
        'theme-orange',
        'theme-blue-dark',
        'theme-green-dark',
        'theme-purple-dark',
        'theme-orange-dark',
      ]}
    >
      {children}
    </NextThemesProvider>
  );
}
