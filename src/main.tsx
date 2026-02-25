import React from 'react';
import ReactDOM from 'react-dom/client';
import { getTheme, applyTheme } from '@/config/theme';
import './index.css';
import App from '@/App';
import AboutPage from '@/pages/AboutPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { isAboutPath, isDashboardPath } from '@/config/routes';

applyTheme(getTheme());

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const root = ReactDOM.createRoot(rootElement);

const pathname = window.location.pathname;
const isAbout = isAboutPath(pathname);
const isDashboard = isDashboardPath(pathname);

root.render(
  <React.StrictMode>
    {isAbout ? <AboutPage /> : isDashboard ? <App /> : <NotFoundPage />}
  </React.StrictMode>,
);
