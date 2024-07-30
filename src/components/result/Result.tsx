import { ResultBox, ResultDetail, ResultType } from './styles';
import { FaAngleRight } from 'react-icons/fa6';
import { ResultTypes } from './types';
import { Link } from 'react-router-dom';

export const Result = ({ gameObj, slice }: ResultTypes) => {
  // 'game*'으로 시작하는 모든 키를 필터링하여 동적으로 배열을 만듭니다.
  const gameEntries = Object.entries(gameObj)
    .filter(([key, value]) => key.startsWith('game') && typeof value === 'object') // 'game'으로 시작하고 객체인 경우만 필터링
    .map(([, value]) => value); // key는 필요 없으므로 제거하고 value만 가져옴

  if (slice === 'slice') {
    return (
      <ResultBox>
        <Link to={'/mypage/gameResultDetail'} state={gameObj}>
          <ResultType>
            <span>{gameObj.title}</span>
            <FaAngleRight />
          </ResultType>
        </Link>
        <ResultDetail>
          <div>
            날짜: <span>{gameObj.game01.date}</span>
          </div>
          <div>
            기록: <span>{gameObj.game01.result}</span>
          </div>
        </ResultDetail>
        <ResultDetail>
          <div>
            날짜: <span>{gameObj.game02.date}</span>
          </div>
          <div>
            기록: <span>{gameObj.game02.result}</span>
          </div>
        </ResultDetail>
        <ResultDetail>
          <div>
            날짜: <span>{gameObj.game03.date}</span>
          </div>
          <div>
            기록: <span>{gameObj.game03.result}</span>
          </div>
        </ResultDetail>
      </ResultBox>
    );
  }

  return (
    <ResultBox>
      <Link to={'/mypage/gameResultDetail'} state={gameObj}>
        <ResultType>
          <span>{gameObj.title}</span>
        </ResultType>
      </Link>
      {gameEntries.map((gameDetail, index) => (
        <ResultDetail key={index}>
          <div>
            날짜: <span>{gameDetail.date}</span>
          </div>
          <div>
            기록: <span>{gameDetail.result}</span>
          </div>
        </ResultDetail>
      ))}
    </ResultBox>
  );
};
