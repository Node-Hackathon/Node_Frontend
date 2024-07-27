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
import GuardianPage from '../pages/signUp/GuardianPage';
import ModalTest from '../test/ModalTest';
import FDFramePage from '../pages/education/FDFramePage';
import BlockPage from '../pages/4DFrame/4DBlock/BlockPage';

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
        children: [
          {
            path: '',
            element: <SignUpPage />,
          },
          {
            path: 'guardian',
            element: <GuardianPage />,
          },
        ],
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
      {
        path: 'education',
        children: [
          {
            path: '4DFrame',
            children: [
              {
                path: '',
                element: <FDFramePage />,
              },
              {
                path: 'block',
                element: <BlockPage />,
              },
            ],
          },
        ],
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
      {
        path: 'modal',
        element: <ModalTest />,
      },
    ],
  },
]);

export default router;
