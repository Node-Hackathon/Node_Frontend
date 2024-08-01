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
import FDFramePage from '../pages/education/FDFramePage';
import BlockPage from '../pages/4DFrame/4DBlock/BlockPage';
import CompositionPage from '../pages/4DFrame/4DComposition/CompositionPage';
import CenterPage from '../pages/center/CenterPage';
import DiagnosisPage from '../pages/diagnosis/DiagnosisPage';
import DiagnosisResult from '../pages/diagnosis/DiagnosisResult';
import CardGame from '../pages/game/card/CardGame';
import MyPage from '../pages/mypage/MyPage';
import UserInfoPage from '../pages/userInfo/UserInfoPage';
import GuardianInfoPage from '../pages/guardianInfo/GuardianInfoPage';
import GuardianPage from '../pages/signUp/GuardianPage';
import GameResultPage from '../pages/gameResult/GameResultPage';
import GameResultDetailPage from '../pages/gameResult/GameResultDetailPage';
import StartGame from '../pages/game/card/start';
import GamePage from '../pages/education/GamePage';
import NumberGame from '../pages/game/number/NumberGame';
import NumberResultPage from '../pages/result/NumberResultPage';
import DiagnosisTotalReslutPage from '../pages/diagnosisTotalReslut/DiagnosisTotalReslutPage';
import CardResultPage from '../pages/result/CardResultPage';

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
        path: 'education/game',
        children: [
          // 교육 페이지 > 게임 페이지 > 카드 맞추기 페이지
          {
            path: 'cardStart',
            element: <StartGame />,
          },
          {
            path: 'card',
            element: <CardGame />,
          },
          // 교육 페이지 > 게임 페이지 > 숫자 맞추기 페이지
          {
            path: 'number',
            element: <NumberGame />,
          },
        ],
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
              {
                path: '',
                element: <GamePage />,
              },
              {
                path: 'number/result',
                element: <NumberResultPage />,
              },
              {
                path: 'card/result',
                element: <CardResultPage />,
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
      {
        path: 'diagnosis',
        children: [
          {
            path: '',
            element: <DiagnosisPage />,
          },
          {
            path: 'result',
            element: <DiagnosisResult />,
          },
        ],
      },
      // 마이 페이지
      {
        path: 'mypage',
        element: <MyPage />,
      },
      // 내 정보 페이지
      {
        path: 'mypage/userInfo',
        element: <UserInfoPage />,
      },
      // 보호자 정보 페이지
      {
        path: 'mypage/guardianInfo',
        element: <GuardianInfoPage />,
      },
      // 게임 누적 결과 페이지
      {
        path: 'mypage/gameResult',
        element: <GameResultPage />,
      },
      // 게임 누적 결과 디테일 페이지
      {
        path: 'mypage/gameResultDetail',
        element: <GameResultDetailPage />,
      },
      // 누적 진단 결과 페이지
      {
        path: 'mypage/totalReslut',
        element: <DiagnosisTotalReslutPage />,
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
