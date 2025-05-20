import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StartPage } from './pages/StartPage/StartPage.tsx';
import { CoursesPage } from './pages/CoursesPage/CoursesPage.tsx';
import { JavaScriptThemesPage } from './pages/JavaScriptThemesPage/JavaScriptThemesPage.tsx';
import { CssThemesPage } from './pages/CssThemesPage/CssThemesPage.tsx';
import { HtmlThemesPage } from './pages/HtmlThemesPage/HtmlThemesPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />,
  },
  {
    path: '/courses',
    element: <CoursesPage />,
  },
  {
    path: '/courses/js',
    element: <JavaScriptThemesPage />,
  },
  {
    path: '/courses/css',
    element: <CssThemesPage />,
  },
  {
    path: '/courses/html',
    element: <HtmlThemesPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
