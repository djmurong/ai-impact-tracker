import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Icons } from '@/config/constants';
import { getAboutPath, getCategoryPath } from '@/config/routes';
import type { Category } from '@/types';
import type { Theme } from '@/config/theme';

type AppHeaderProps = {
  currentPage: 'dashboard' | 'about';
  activeCategory?: Category;
  onCategoryChange?: (category: Category) => void;
  theme?: Theme;
  onThemeChange?: (theme: Theme) => void;
};

const navItemBaseClass =
  'flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap border shrink-0';

const navItemInactiveClass =
  `${navItemBaseClass} text-slate-600 hover:text-slate-800 hover:bg-slate-200/80 dark:text-slate-500 dark:hover:text-slate-300 dark:hover:bg-slate-900/50 border-transparent`;

const navItemActiveClass =
  `${navItemBaseClass} bg-blue-500/15 text-blue-600 dark:bg-blue-600/10 dark:text-blue-400 border-blue-400/30 dark:border-blue-500/20`;

const CATEGORY_TABS: Category[] = ['Economic', 'Social', 'Political', 'Capability'];

const categoryIcon = (category: Category) => {
  if (category === 'Economic') return <Icons.Economy />;
  if (category === 'Social') return <Icons.Social />;
  if (category === 'Political') return <Icons.Political />;
  if (category === 'Capability') return <Icons.Capability />;
  return <Icons.Dashboard />;
};

export const AppHeader: React.FC<AppHeaderProps> = ({
  currentPage,
  activeCategory = 'Overview',
  onCategoryChange,
  theme = 'dark',
  onThemeChange,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isDashboard = currentPage === 'dashboard';
  const dashboardSectionHref = (category: Category) => getCategoryPath(category);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  const handleNavSelect = (category?: Category) => {
    if (category !== undefined) onCategoryChange?.(category);
    setMenuOpen(false);
  };

  const dropdownItemClass =
    'flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left border';

  const dropdownItemInactive =
    'text-slate-700 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-white border-transparent';

  const dropdownItemActive =
    'bg-blue-500/15 text-blue-600 dark:bg-blue-600/15 dark:text-blue-400 border-blue-400/30 dark:border-blue-500/20';

  return (
    <nav
      ref={menuRef}
      className="w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md sticky top-0 z-40 shrink-0"
    >
      {/* Top row: on narrow screens menu (left) + theme toggle (top right); on md+ full tabs */}
      <div className="flex items-center justify-between md:justify-between gap-2 px-3 py-3 sm:px-5 lg:px-8 md:overflow-x-auto md:scrollbar-hide">
        {/* Mobile: menu button left */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/80 transition-colors shrink-0"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        {/* Mobile: theme toggle top right */}
        {onThemeChange && (
          <button
            type="button"
            onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/80 transition-colors shrink-0"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}

        {/* Desktop: Overview left, rest right */}
        <div className="hidden md:flex items-center justify-between w-full gap-2 lg:gap-3 min-w-0">
          <div className="flex items-center gap-2 lg:gap-3 shrink-0 min-w-0">
            {isDashboard ? (
              <button
                onClick={() => onCategoryChange?.('Overview')}
                className={`${activeCategory === 'Overview' ? navItemActiveClass : navItemInactiveClass}`}
              >
                <span className="flex items-center justify-center w-5 h-5 opacity-80">
                  <Icons.Dashboard />
                </span>
                <span className="pt-0.5">Overview</span>
              </button>
            ) : (
              <a href={dashboardSectionHref('Overview')} className={navItemInactiveClass}>
                <span className="flex items-center justify-center w-5 h-5 opacity-80">
                  <Icons.Dashboard />
                </span>
                <span className="pt-0.5">Overview</span>
              </a>
            )}
          </div>
          <div className="flex items-center justify-end gap-2 lg:gap-3 min-w-max">
            {onThemeChange && (
              <button
                type="button"
                onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}
                className="flex items-center justify-center w-10 h-10 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/80 transition-colors shrink-0"
                aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            {CATEGORY_TABS.map((category) =>
              isDashboard ? (
                <button
                  key={category}
                  onClick={() => onCategoryChange?.(category)}
                  className={activeCategory === category ? navItemActiveClass : navItemInactiveClass}
                >
                  <span className="flex items-center justify-center w-5 h-5 opacity-80">
                    {categoryIcon(category)}
                  </span>
                  <span className="pt-0.5">{category}</span>
                </button>
              ) : (
                <a key={category} href={dashboardSectionHref(category)} className={navItemInactiveClass}>
                  <span className="flex items-center justify-center w-5 h-5 opacity-80">
                    {categoryIcon(category)}
                  </span>
                  <span className="pt-0.5">{category}</span>
                </a>
              ),
            )}

            {isDashboard ? (
              <a href={getAboutPath()} className={navItemInactiveClass}>
                <span className="flex items-center justify-center w-5 h-5 opacity-80">
                  <Icons.About />
                </span>
                <span className="pt-0.5">About</span>
              </a>
            ) : (
              <span className={navItemActiveClass}>
                <span className="flex items-center justify-center w-5 h-5 opacity-80">
                  <Icons.About />
                </span>
                <span className="pt-0.5">About</span>
              </span>
            )}
          </div>
        </div>

      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/95 px-3 py-2 pb-4">
          <div className="flex flex-col gap-1 max-h-[70vh] overflow-y-auto scrollbar-hide">
            {isDashboard ? (
              <>
                <button
                  onClick={() => handleNavSelect('Overview')}
                  className={`${dropdownItemClass} ${activeCategory === 'Overview' ? dropdownItemActive : dropdownItemInactive}`}
                >
                  <span className="flex items-center justify-center w-5 h-5 opacity-80 shrink-0">
                    <Icons.Dashboard />
                  </span>
                  <span>Overview</span>
                </button>
                {CATEGORY_TABS.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleNavSelect(category)}
                    className={`${dropdownItemClass} ${activeCategory === category ? dropdownItemActive : dropdownItemInactive}`}
                  >
                    <span className="flex items-center justify-center w-5 h-5 opacity-80 shrink-0">
                      {categoryIcon(category)}
                    </span>
                    <span>{category}</span>
                  </button>
                ))}
                <a
                  href={getAboutPath()}
                  onClick={() => setMenuOpen(false)}
                  className={`${dropdownItemClass} ${dropdownItemInactive}`}
                >
                  <span className="flex items-center justify-center w-5 h-5 opacity-80 shrink-0">
                    <Icons.About />
                  </span>
                  <span>About</span>
                </a>
              </>
            ) : (
              <>
                <a
                  href={dashboardSectionHref('Overview')}
                  onClick={() => setMenuOpen(false)}
                  className={`${dropdownItemClass} ${dropdownItemInactive}`}
                >
                  <span className="flex items-center justify-center w-5 h-5 opacity-80 shrink-0">
                    <Icons.Dashboard />
                  </span>
                  <span>Overview</span>
                </a>
                {CATEGORY_TABS.map((category) => (
                  <a
                    key={category}
                    href={dashboardSectionHref(category)}
                    onClick={() => setMenuOpen(false)}
                    className={`${dropdownItemClass} ${dropdownItemInactive}`}
                  >
                    <span className="flex items-center justify-center w-5 h-5 opacity-80 shrink-0">
                      {categoryIcon(category)}
                    </span>
                    <span>{category}</span>
                  </a>
                ))}
                <span className={`${dropdownItemClass} ${dropdownItemActive}`}>
                  <span className="flex items-center justify-center w-5 h-5 opacity-80 shrink-0">
                    <Icons.About />
                  </span>
                  <span>About</span>
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
