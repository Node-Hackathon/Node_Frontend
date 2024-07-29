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
import GuardianPage from '../pages/signUp/GuardianPage';
import ModalTest from '../test/ModalTest';
import FDFramePage from '../pages/education/FDFramePage';
import BlockPage from '../pages/4DFrame/4DBlock/BlockPage';
import CompositionPage from '../pages/4DFrame/4DComposition/CompositionPage';
import CenterPage from '../pages/center/CenterPage';
import ChoiceNumGame from '../pages/choiceNumGame/choiceNumGame';
import SelectCardGame from '../pages/selectCardGame/selectCardGame';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      // 랜딩 페이지
      {
        path: '',
        element: <LandingPage />,
      },
      // 로그인 페이지
      {
        path: 'signIn',
        element: <SignInPage />,
      },
      // 회원가입 페이지
      {
        path: 'signUp',
        element: <SignUpPage />,
      },
      // 회원가입 페이지 > 보호자 정보 입력 페이지
      {
        path: 'signUp-guardian',
        element: <GuardianPage />,
      },
    ],
  },
  {
    path: '/',
    element: <Home />,
    children: [
      // 메인 페이지
      {
        path: 'main',
        element: <MainPage />,
      },
      // 교육 페이지
      {
        path: 'education',
        children: [
          // 교육 페이지 > 포디프레임 페이지
          {
            path: '4DFrame',
            children: [
              {
                path: '',
                element: <FDFramePage />,
              },
              // 교육 페이지 > 포디프레임 페이지 > 블록 쌓기 페이지
              {
                path: 'block',
                element: <BlockPage />,
              },
              // 교육 페이지 > 포디프레임 페이지 > 구성 놀이 페이지
              {
                path: 'composition',
                element: <CompositionPage />,
              },
            ],
          },
          // 교육 페이지 > 게임 페이지
          {
            path: 'game',
            children: [
              // 교육 페이지 > 게임 페이지 > 숫자 맞추기 페이지
              {
                path: 'choiceNumGame',
                element: <ChoiceNumGame />,
              },
              {
                path: 'selectCardGame',
                element: <SelectCardGame />,
              },
            ],
          },
        ],
      },
      // 상담 센터 페이지
      {
        path: 'center',
        element: <CenterPage />,
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
