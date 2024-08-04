import {
  Banner,
  Description,
  Education,
  EduImg,
  EduType,
  GoToCheck,
  GoToEdu,
  MainContainer,
  Text,
  EduText,
  Promotion,
  PromotionImg,
  Diary,
  Wrapper,
} from './styles';
import BlockGame from '../../assets/images/BlockGame.png';
import SettingGame from '../../assets/images/SettingGame.png';
import ReverseCardGame from '../../assets/images/ReverseCardGame.png';
import FindNumberGame from '../../assets/images/FindNumberGame.png';
import HandShake from '../../assets/images/HandShake.png';
import { Link } from 'react-router-dom';
import { Label7 } from '../../components/text/Text';
import { theme } from '../../styles/theme';
import { RiBook3Line } from 'react-icons/ri';
import { useGetUserByIdQuery } from '../../services/myPage/myPageApi';

export default function MainPage() {
  const { data: userData } = useGetUserByIdQuery();

  return (
    <MainContainer>
      {/* 배너 */}
      <Banner>
        <Description>
          <Text>지금 시작하세요</Text>
          <Text>건강한 두뇌를 위한 첫 걸음</Text>
        </Description>
        <Link to={'/diagnosis'}>
          <GoToCheck>바로 진단하러 가기</GoToCheck>
        </Link>
      </Banner>
      {/* 교육 종류 */}
      <Education>
        <Description>
          <Text>치매 예방 교육과 함께</Text>
          <Text>기억의 힘을 키워보세요</Text>
          <Text fontSize="15px" $marginTop="1rem">
            어렵게 생각하지 마세요, 노드가 매일 함께 할게요
          </Text>
        </Description>
        <Link to={'/education/4DFrame/block'}>
          <GoToEdu>
            <EduType>
              <EduText>블록 쌓기</EduText>
              <EduText fontSize={'16px'} fontWeight={'500'}>
                주어진 조건을 활용해
                <br />
                블럭을 쌓아보세요
              </EduText>
            </EduType>
            <EduImg>
              <img src={BlockGame} />
            </EduImg>
          </GoToEdu>
        </Link>
        <Link to={'/education/4DFrame/composition'}>
          <GoToEdu>
            <EduType>
              <EduText>구성 놀이</EduText>
              <EduText fontSize={'16px'} fontWeight={'500'}>
                주어진 주제를
                <br />
                블록으로 표현하세요
              </EduText>
            </EduType>
            <EduImg>
              <img src={SettingGame} />
            </EduImg>
          </GoToEdu>
        </Link>
        <Link to={'/education/game/cardStart'}>
          <GoToEdu>
            <EduType>
              <EduText>카드 뒤집기</EduText>
              <EduText fontSize={'16px'} fontWeight={'500'}>
                카드의 모양을 기억해
                <br />
                짝을 맞춰보세요
              </EduText>
            </EduType>
            <EduImg>
              <img src={ReverseCardGame} />
            </EduImg>
          </GoToEdu>
        </Link>
        <Link to={'/education/game/number'}>
          <GoToEdu>
            <EduType>
              <EduText>숫자 맞추기</EduText>
              <EduText fontSize={'16px'} fontWeight={'500'}>
                빠르게 나타나는 숫자를
                <br />
                기억해 순서대로 누르세요
              </EduText>
            </EduType>
            <EduImg>
              <img src={FindNumberGame} />
            </EduImg>
          </GoToEdu>
        </Link>
      </Education>
      <Diary>
        <Wrapper>
          <Text>{userData?.name}님의 일기장</Text>
          <Text fontSize="15px" $marginTop="1rem">
            오늘의 감정 기록하러 가기
          </Text>
        </Wrapper>
        <Link to="/diary">
          <div
            style={{
              border: '1px solid white',
              borderRadius: '30%',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <RiBook3Line color="white" size={'3rem'} />
          </div>
        </Link>
      </Diary>
      {/* 홍보 */}
      <Promotion>
        <Description>
          <Text>Node는 여러분들의</Text>
          <Text>연락을 기다리고 있습니다.</Text>
          <Text fontSize="15px" $marginTop="1rem">
            Node의 미래에
            <br />
            여러분들의 서비스를 추가할 수 있습니다
            <br />
            페이지 하단에 기재되어있는 정보로 연락주세요
          </Text>
        </Description>
        <PromotionImg>
          <img src={HandShake} width={'100%'} />
        </PromotionImg>
        <Label7 color={theme.colors.backgroundNormal}>출처 freepik</Label7>
      </Promotion>
    </MainContainer>
  );
}
