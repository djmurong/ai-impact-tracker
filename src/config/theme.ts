const STORAGE_KEY = 'ai-impact-theme';

export type Theme = 'light' | 'dark';

export function getTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return 'dark';
}

export function setTheme(theme: Theme): void {
  window.localStorage.setItem(STORAGE_KEY, theme);
  applyTheme(theme);
}

export function applyTheme(theme: Theme): void {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}

/** Chart colors that depend on theme (grid, axes, tooltip) */
export function getChartTheme(theme: Theme) {
  return theme === 'dark'
    ? { tooltipBg: '#0f172a', gridStroke: '#1e293b', axisStroke: '#475569' }
    : { tooltipBg: '#f8fafc', gridStroke: '#e2e8f0', axisStroke: '#64748b' };
}
