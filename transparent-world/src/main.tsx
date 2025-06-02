import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CoursesPage } from './pages/CoursesPage/CoursesPage.tsx';
import { CodeTaskPage } from './pages/CodeTaskPage/CodeTaskPage.tsx';
import { TaskType } from './models/taskType.enum.ts';
import { generateColorInPalette } from './utils/colorGenerator.ts';
import { TheoryPage } from './pages/TheoryPage/TheoryPage.tsx';
import { jsThemes } from './mocks/jsThemes.ts';
import { cssThemes } from './mocks/cssThemes.ts';
import { htmlThemes } from './mocks/htmlThemes.ts';
import { PracticePage } from './pages/PracticePage/PracticePage.tsx';
import { GeometryRunnerPage } from './pages/GeometryRunnerPage/GeometryRunnerPage.tsx';
import { LoginPage } from './pages/LoginPage/LoginPage.tsx';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage.tsx';
import { ParticlesBackground } from './components/ParticlesBackground/ParticlesBackground.tsx';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute.tsx';
import { AuthStatus } from './consts/authStatus.enum.ts';

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
    element: <PrivateRoute authStatus={AuthStatus.Authorized}>
      <CoursesPage />
    </PrivateRoute>,
  },
  {
    path: '/runner',
    element: <PrivateRoute authStatus={AuthStatus.Authorized}>
      <GeometryRunnerPage />
    </PrivateRoute>,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/registration',
    element: <RegistrationPage />,
  },
  {
    path: '/:course',
    element: <PrivateRoute authStatus={AuthStatus.Authorized}>
      <TheoryPage />
    </PrivateRoute>,
  },
  {
    path: '/js/practice',
    element: <PrivateRoute authStatus={AuthStatus.Authorized}>
      <PracticePage course={'js'} themes={jsThemes} courseColor={jsColor} />
    </PrivateRoute>,
  },
  {
    path: '/css/practice',
    element: <PrivateRoute authStatus={AuthStatus.Authorized}>
      <PracticePage course={'css'} themes={cssThemes} courseColor={cssColor} />
    </PrivateRoute>,
  },
  {
    path: '/html/practice',
    element: <PrivateRoute authStatus={AuthStatus.Authorized}>
      <PracticePage course={'html'} themes={htmlThemes} courseColor={htmlColor} />
    </PrivateRoute>,
  },
  {
    path: '/js/practice/:task',
    element: <PrivateRoute authStatus={AuthStatus.Authorized}>
      <CodeTaskPage task={{ id: 'nest', title: 'First steps in Nest.js', text: mockTaskText, type: TaskType.Code }} />
    </PrivateRoute>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ParticlesBackground />
    <RouterProvider router={router} />
  </StrictMode>,
)
