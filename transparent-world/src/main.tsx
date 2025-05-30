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
import { TheoryAndPracticePage } from './pages/TheoryAndPracticePage/TheoryAndPracticePage.tsx';
import { generateColorInPalette } from './utils/colorGenerator.ts';
import { TheoryPage } from './pages/TheoryPage/TheoryPage.tsx';
import { jsThemes } from './mocks/jsThemes.ts';
import { cssThemes } from './mocks/cssThemes.ts';
import { htmlThemes } from './mocks/htmlThemes.ts';
import { PracticePage } from './pages/PracticePage/PracticePage.tsx';
import { GeometryRunnerPage } from './pages/GeometryRunnerPage/GeometryRunnerPage.tsx';
import { LoginPage } from './pages/LoginPage/LoginPage.tsx';

const mockTaskText = `
  To create a Nest application instance, we use the core NestFactory class. NestFactory exposes a few
  static methods that allow creating an application instance. The create() method returns an application
  object, which fulfills the INestApplication interface. This object provides a set of methods which are described
  in the coming chapters. In the main.ts example above, we simply start up our HTTP listener, which lets the application
  await inbound HTTP requests.
`;

const jsColor = generateColorInPalette(170, [70, 90], [50, 70]);
const htmlColor = generateColorInPalette(320, [70, 90], [50, 70]);
const cssColor = generateColorInPalette(220, [70, 90], [50, 70]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />,
  },
  {
    path: '/runner',
    element: <GeometryRunnerPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
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
    path: '/courses/js/:theme',
    element: <TheoryAndPracticePage buttonColor={jsColor} course='js' />,
  },
  {
    path: '/courses/css/:theme',
    element: <TheoryAndPracticePage buttonColor={cssColor} course='css' />,
  },
  {
    path: '/courses/html/:theme',
    element: <TheoryAndPracticePage buttonColor={htmlColor} course='html' />,
  },
  {
    path: '/courses/js/:theme/theory',
    element: <TheoryPage themes={jsThemes} courseColor={jsColor} />,
  },
  {
    path: '/courses/css/:theme/theory',
    element: <TheoryPage themes={cssThemes} courseColor={cssColor} />,
  },
  {
    path: '/courses/html/:theme/theory',
    element: <TheoryPage themes={htmlThemes} courseColor={htmlColor} />,
  },
  {
    path: '/courses/js/:theme/practice',
    element: <PracticePage course={'js'} themes={jsThemes} courseColor={jsColor} />,
  },
  {
    path: '/courses/css/:theme/practice',
    element: <PracticePage course={'css'} themes={cssThemes} courseColor={cssColor} />,
  },
  {
    path: '/courses/html/:theme/practice',
    element: <PracticePage course={'html'} themes={htmlThemes} courseColor={htmlColor} />,
  },
  {
    path: '/courses/js/:theme/practice/:task',
    element: <CodeTaskPage task={{id: 'nest', title: 'First steps in Nest.js', text: mockTaskText, type: TaskType.Code}}/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
