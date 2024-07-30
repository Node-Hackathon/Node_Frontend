import { PrimaryButton, SecondaryButton } from '../../components/button/Button';
import Modal from '../../components/modal/Modal';
import { Body2, Body4, Title2 } from '../../components/text/Text';
import { theme } from '../../styles/theme';
import { useDiagnosisResult } from './events';
import {
  DiagnosisBox,
  DiagnosisButton,
  DiagnosisContainer,
  ResultContent,
  ResultTitlePair,
} from './styles';
import { PiHospitalLight } from 'react-icons/pi';
import { PiHandsClapping } from 'react-icons/pi';

export default function DiagnosisResult() {
  const {
    score,
    handleConfirm,
    handleRestart,
    isOpen,
    question1,
    question2,
    handleModalNo,
    handleModalYes,
  } = useDiagnosisResult();

  return (
    <DiagnosisContainer>
      <DiagnosisBox>
        <ResultContent>
          <Title2>검사결과</Title2>
          {score >= 7 ? (
            <>
              <PiHospitalLight size={100} color={theme.colors.primaryStrong} />
              <Body2>치매가 의심됩니다!</Body2>
              <ResultTitlePair>
                <Body4>병원에 방문하셔서</Body4>
                <Body4> 정밀 검사를 받아 보시는 걸 추천드려요.</Body4>
              </ResultTitlePair>
            </>
          ) : (
            <>
              <PiHandsClapping size={100} color={theme.colors.primaryStrong} />
              <Body2>축하합니다! 정상입니다.</Body2>
              <ResultTitlePair style={{ opacity: 0 }}></ResultTitlePair>
            </>
          )}
        </ResultContent>
        <DiagnosisButton>
          <SecondaryButton size="m" onClick={handleRestart}>
            다시 검사하기
          </SecondaryButton>
          <PrimaryButton size="m" onClick={handleConfirm}>
            확인
          </PrimaryButton>
        </DiagnosisButton>
      </DiagnosisBox>
      <Modal
        isOpen={isOpen}
        question1={question1}
        question2={question2}
        onClickNo={handleModalNo}
        onClickYes={handleModalYes}
      />
    </DiagnosisContainer>
  );
}
