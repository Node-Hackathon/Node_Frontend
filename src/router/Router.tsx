import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import TextTest from '../test/TextTest';
import LandingPage from '../pages/landing/LandingPage';
import SignInPage from '../pages/signIn/SignInPage';
import InputTest from '../test/InputTest';
import ButtonTest from '../test/ButtonTest';
import SignUpPage from '../pages/signUp/SignUpPage';
import Home from '../pages/Home';
import MainPage from '../pages/main/MainPage';
import ProgressTest from '../test/ProgressTest';
import CenterListPage from '../pages/centerList/CenterListPage';

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
      {
        path: 'signUp',
        element: <SignUpPage />,
      },
      {
        path: 'list',
        element: <CenterListPage />,
      },
    ],
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'main',
        element: <MainPage />,
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
      {
        path: 'input',
        element: <InputTest />,
      },
      {
        path: 'button',
        element: <ButtonTest />,
      },
      {
        path: 'progress',
        element: <ProgressTest />,
      },
    ],
  },
]);

export default router;
