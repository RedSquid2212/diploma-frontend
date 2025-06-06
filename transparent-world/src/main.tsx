import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CoursesPage } from './pages/CoursesPage/CoursesPage.tsx';
import { TheoryPage } from './pages/TheoryPage/TheoryPage.tsx';
import { PracticePage } from './pages/PracticePage/PracticePage.tsx';
import { GeometryRunnerPage } from './pages/GeometryRunnerPage/GeometryRunnerPage.tsx';
import { LoginPage } from './pages/LoginPage/LoginPage.tsx';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage.tsx';
import { ParticlesBackground } from './components/ParticlesBackground/ParticlesBackground.tsx';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute.tsx';
import { AuthStatus } from './consts/authStatus.enum.ts';
import { ProfilePage } from './pages/ProfilePage/ProfilePage.tsx';
import { App } from './App.tsx';
import { AppContextProvider } from './components/AppContext/AppContext.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppContextProvider>
      <App />
    </AppContextProvider>,
    children: [
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
        path: '/:course',
        element: <PrivateRoute authStatus={AuthStatus.Authorized}>
          <TheoryPage />
        </PrivateRoute>,
      },
      {
        path: '/:course/practice',
        element: <PrivateRoute authStatus={AuthStatus.Authorized}>
          <PracticePage />
        </PrivateRoute>,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      // {
      //   path: '/task/:taskId',
      //   element: <CodeTaskPage />
      // }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/registration',
    element: <RegistrationPage />,
  },
  // {
  //     path: '/js/practice/:task',
  //     element: <PrivateRoute authStatus={AuthStatus.Authorized}>
  //         <CodeTaskPage task={{ id: 'nest', title: 'First steps in Nest.js', text: mockTaskText, type: TaskType.Code }} />
  //     </PrivateRoute>,
  // },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ParticlesBackground />
    <RouterProvider router={router} />
  </StrictMode>,
)
