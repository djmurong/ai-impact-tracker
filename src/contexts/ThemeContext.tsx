import React, { createContext, useContext } from 'react';
import type { Theme } from '@/config/theme';

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}

export function ThemeProvider({
  theme,
  setTheme,
  children,
}: {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  children: React.ReactNode;
}) {
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
