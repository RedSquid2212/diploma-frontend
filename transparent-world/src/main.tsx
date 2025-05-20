import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StartPage } from './pages/StartPage/StartPage.tsx';
import { CoursesPage } from './pages/CoursesPage/CoursesPage.tsx';
import { JavaScriptThemesPage } from './pages/JavaScriptThemesPage/JavaScriptThemesPage.tsx';
import { CssThemesPage } from './pages/CssThemesPage/CssThemesPage.tsx';
import { HtmlThemesPage } from './pages/HtmlThemesPage/HtmlThemesPage.tsx';
import { CodeTaskPage } from './pages/CodeTaskPage/CodeTaskPage.tsx';
import { TaskType } from './models/taskType.enum.ts';

const mockTaskText = `
  To create a Nest application instance, we use the core NestFactory class. NestFactory exposes a few
  static methods that allow creating an application instance. The create() method returns an application
  object, which fulfills the INestApplication interface. This object provides a set of methods which are described
  in the coming chapters. In the main.ts example above, we simply start up our HTTP listener, which lets the application
  await inbound HTTP requests.
`;

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
  {
    path: '/courses/js/task',
    element: <CodeTaskPage task={{title: 'First steps in Nest.js', text: mockTaskText, type: TaskType.Code}}/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
