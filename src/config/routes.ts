import type { Category } from '@/types';

const rawBase = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '') || '/';
export const BASE_PATH = rawBase === '/' ? '' : rawBase;

export const CATEGORIES: Category[] = ['Overview', 'Economic', 'Social', 'Political', 'Capability'];

/** Path for a category section (e.g. /ai-impact-tracker/Overview) */
export function getCategoryPath(category: Category): string {
  if (category === 'Overview') {
    return BASE_PATH ? `${BASE_PATH}/` : '/';
  }
  return `${BASE_PATH}/${category}`;
}

const baseRegex = BASE_PATH ? new RegExp(`^${BASE_PATH.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/?`) : null;

/** Parse category from pathname; returns isNotFound if path is invalid */
export function getCategoryFromPath(pathname: string): { category: Category; isNotFound: boolean } {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  const withoutBase = baseRegex ? normalized.replace(baseRegex, '/') : normalized;
  const segment = withoutBase === '/' ? '' : withoutBase.replace(/^\//, '');

  if (!segment || segment === 'Overview') return { category: 'Overview', isNotFound: false };
  if (CATEGORIES.includes(segment as Category)) return { category: segment as Category, isNotFound: false };
  return { category: 'Overview', isNotFound: true };
}

/** Path for About page */
export function getAboutPath(): string {
  return `${BASE_PATH}/about`;
}

/** True if pathname is dashboard root (Overview) */
export function isRootPath(pathname: string): boolean {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  if (BASE_PATH) {
    return normalized === BASE_PATH || normalized === `${BASE_PATH}/`;
  }
  return normalized === '/' || normalized === '';
}

/** True if pathname is a valid dashboard category path */
export function isDashboardPath(pathname: string): boolean {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  const withoutBase = baseRegex ? normalized.replace(baseRegex, '/') : normalized;
  const segment = withoutBase === '/' ? '' : withoutBase.replace(/^\//, '');
  if (!segment) return true; // root = Overview
  return CATEGORIES.includes(segment as Category);
}

/** True if pathname is About page */
export function isAboutPath(pathname: string): boolean {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  const aboutPath = BASE_PATH ? `${BASE_PATH}/about` : '/about';
  return normalized === aboutPath || normalized === `${aboutPath}/`;
}
