import React, { useEffect, useState } from 'react';
import { AppHeader } from '@/components/AppHeader';
import { NotFoundView } from '@/components/NotFoundView';
import type { Category } from '@/types';
import { getCategoryFromPath, getCategoryPath } from '@/config/routes';
import { getTheme, setTheme } from '@/config/theme';
import type { Theme } from '@/config/theme';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { EconomicView } from '@/features/Economic/EconomicView';
import { SocialView } from '@/features/Social/SocialView';
import { PoliticalView } from '@/features/Political/PoliticalView';
import { CapabilityView } from '@/features/Capability/CapabilityView';
import { OverviewView } from '@/features/Overview/OverviewView';

function getRoute() {
  return getCategoryFromPath(window.location.pathname);
}

const App: React.FC = () => {
  const [route, setRoute] = useState(getRoute);
  const [theme, setThemeState] = useState<Theme>(getTheme);

  useEffect(() => {
    const handlePopState = () => setRoute(getRoute());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleCategoryChange = (category: Category) => {
    setRoute({ category, isNotFound: false });
    const path = getCategoryPath(category);
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
  };

  const handleThemeChange = (next: Theme) => {
    setTheme(next);
    setThemeState(next);
  };

  const renderContent = () => {
    if (route.isNotFound) return <NotFoundView />;
    switch (route.category) {
      case 'Overview':
        return <OverviewView />;
      case 'Economic':
        return <EconomicView />;
      case 'Social':
        return <SocialView />;
      case 'Political':
        return <PoliticalView />;
      case 'Capability':
        return <CapabilityView />;
      default:
        return <OverviewView />;
    }
  };

  return (
    <ThemeProvider theme={theme} setTheme={handleThemeChange}>
      <div className="h-screen w-full bg-slate-100 dark:bg-slate-950 flex flex-col font-sans overflow-hidden">
        <AppHeader
          currentPage="dashboard"
          activeCategory={route.category}
          onCategoryChange={handleCategoryChange}
          theme={theme}
          onThemeChange={handleThemeChange}
        />

        <main className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-5 lg:p-8 space-y-6 scroll-smooth custom-scroll">
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">{renderContent()}</div>

          <footer className="pt-10 border-t border-slate-300 dark:border-slate-900/50">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-[11px] text-slate-600 dark:text-slate-500">
            <span>&copy; {new Date().getFullYear()} AI Impact Monitor. All rights reserved.</span>
            <span className="text-slate-500 dark:text-slate-400">
              Free, citation-backed tracking of AI economic, social, political, and capability
              outcomes.
            </span>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span>Methodology: Public-source aggregation</span>
              <span>Coverage: Global and U.S. indicators</span>
            </div>
          </div>
          </footer>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
