import React, { useState } from 'react';
import { FileQuestion } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';
import { getCategoryPath } from '@/config/routes';
import { getTheme, setTheme } from '@/config/theme';
import type { Theme } from '@/config/theme';

const NotFoundPage: React.FC = () => {
  const homeHref = getCategoryPath('Overview');
  const [theme, setThemeState] = useState<Theme>(getTheme);

  const handleThemeChange = (next: Theme) => {
    setTheme(next);
    setThemeState(next);
  };

  return (
    <div className="h-screen w-full bg-slate-100 dark:bg-slate-950 flex flex-col font-sans overflow-hidden">
      <AppHeader currentPage="dashboard" theme={theme} onThemeChange={handleThemeChange} />

      <main className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-5 lg:p-8 flex items-center justify-center min-h-0">
        <section className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl p-8 sm:p-10 lg:p-12 w-full max-w-xl text-center space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500 shadow-sm dark:shadow-none">
          <div className="flex justify-center">
            <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-200 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400">
              <FileQuestion size={32} strokeWidth={1.5} />
            </span>
          </div>
          <div className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500">
            Error 404
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            Page not found
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm lg:text-base leading-relaxed">
            The page you’re looking for doesn’t exist or has been moved. Head back to the dashboard
            to explore AI impact metrics.
          </p>
          <a
            href={homeHref}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-blue-500/15 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 border border-blue-400/30 dark:border-blue-500/30 hover:bg-blue-500/25 dark:hover:bg-blue-600/30 hover:border-blue-500/50 transition-all"
          >
            Back to dashboard
          </a>
        </section>
      </main>
    </div>
  );
};

export default NotFoundPage;
