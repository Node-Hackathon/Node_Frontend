import block1 from '../../assets/images/block1.png';
import block2 from '../../assets/images/block2.png';
import block3 from '../../assets/images/block3.png';
import block4 from '../../assets/images/block4.png';
import composition1 from '../../assets/images/composition1.png';
import composition2 from '../../assets/images/composition2.png';
import composition3 from '../../assets/images/composition2.png';
import composition4 from '../../assets/images/composition2.png';
import card1 from '../../assets/images/card1.png';
import card2 from '../../assets/images/card2.png';
import card3 from '../../assets/images/card3.png';
import card4 from '../../assets/images/card4.png';
import number1 from '../../assets/images/number1.png';
import number2 from '../../assets/images/number2.png';
import number3 from '../../assets/images/number3.png';
import number4 from '../../assets/images/number4.png';
import { useParams } from 'react-router-dom';
import { ManualDataType } from './types';

export const manualData: ManualDataType = {
  block: {
    title: '블럭 쌓기',
    details: [
      { img: block1, text: '4D블럭들의 조합을 학습해주세요.' },
      { img: block2, text: '솔루션에 맞춰 4D블럭을 쌓아주세요.' },
      { img: block3, text: '쌓은 블럭의 사진을 찍고, 등록 해주세요.' },
      { img: block4, text: '결과를 확인해보세요!' },
    ],
  },
  composition: {
    title: '구성 놀이',
    details: [
      { img: composition1, text: '4D프레임 격자판과 4D블럭을 준비해주세요.' },
      { img: composition2, text: '조합된 블럭과 카메라를 평행하게 두고 촬영해주세요!' },
      { img: composition3, text: '촬영하신 사진을 등록해주세요!' },
      { img: composition4, text: '처리된 사진을 확인하고 저장해주세요!' },
    ],
  },
  card: {
    title: '그림 맞추기',
    details: [
      { img: card1, text: '일정 시간 동안 보여지는 도형의 모양과 위치를 기억 해주세요.' },
      { img: card2, text: '뒤집혀진 그림 중 같은 그림을 선택해 게임을 진행합니다.' },
      { img: card3, text: '8개의 모양을 전부 짝 지으면 통과! 다음 단계로 넘어갑니다.' },
      { img: card4, text: '결과를 확인하고 이전 게임과 비교하세요!' },
    ],
  },
  number: {
    title: '숫자 맞추기',
    details: [
      { img: number1, text: '일정 시간 동안 보여지는 숫자의 순서를 기억 해주세요.' },
      { img: number2, text: '가려진 숫자를 순서대로 클릭하세요.' },
      { img: number3, text: '순서대로 모든 숫자를 터치하면 성공! 다음 단계로 넘어갑니다.' },
      { img: number4, text: '결과를 확인하고 이전 게임과 비교하세요!' },
    ],
  },
};

export const useManual = () => {
  const { section } = useParams();

  if (section && section in manualData) {
    return manualData[section];
  }

  return null;
};
