import { Title3 } from '../text/Text';
import Textarea from '../textarea/Textarea';
import {
  DiaryResultBox,
  DiaryResultButton,
  DiaryResultContainer,
  DiaryResultList,
  DiaryResultListItem,
  DiaryResultQuestion,
} from './styles';
import { questions } from '../../pages/survey/events';
import { useDiaryResult } from './events';
import { PrimaryButton } from '../button/Button';

export default function DiaryResult() {
  const { answers, year, month, day, handleNavigate } = useDiaryResult();

  return (
    <DiaryResultContainer>
      <DiaryResultBox>
        <header>
          <Title3>{year}년</Title3>
          <Title3>
            {month}월 {day}일
          </Title3>
        </header>
        <DiaryResultList>
          {questions.map((question, index) => (
            <DiaryResultListItem key={index}>
              <DiaryResultQuestion>{question?.diary_question}</DiaryResultQuestion>
              <Textarea value={answers[index]} disabled={true}></Textarea>
            </DiaryResultListItem>
          ))}
        </DiaryResultList>
        <DiaryResultButton>
          <PrimaryButton size="l" onClick={handleNavigate}>
            첫 화면으로 돌아가기
          </PrimaryButton>
        </DiaryResultButton>
      </DiaryResultBox>
    </DiaryResultContainer>
  );
}
