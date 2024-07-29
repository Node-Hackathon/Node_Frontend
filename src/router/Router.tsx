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
import ModalTest from '../test/ModalTest';
import GuardianPage from '../pages/signUp/GuardianPage';
import CenterListPage from '../pages/centerList/CenterListPage';
import ChoiceNumGame from '../pages/choiceNumGame/choiceNumGame';
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
        path: 'signUp-guardian',
        element: <GuardianPage />,
      },
      {
        path: 'list',
        element: <CenterListPage />,
      },
      {
        path: 'game',
        element: <ChoiceNumGame />,
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
      {
        path: 'modal',
        element: <ModalTest />,
      },
    ],
  },
]);

export default router;
