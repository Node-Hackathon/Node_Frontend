import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import TextTest from '../test/TextTest';
import LandingPage from '../pages/landing/LandingPage';
import SignInPage from '../pages/signIn/SignInPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <LandingPage />,
      },
      {
        path: 'signIn',
        element: <SignInPage />,
      },
    ],
  },
  {
    path: '/test',
    children: [
      {
        path: 'text',
        element: <TextTest />,
      },
    ],
  },
]);

export default router;
