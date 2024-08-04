import { Link } from 'react-router-dom';
import { ResultBox, ResultDetail, ResultType } from '../../components/result/styles';
import { useGetDiaryResultQuery } from '../../services/diary/diaryApi';
import { Container } from '../gameResult/styles';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { NoExistDiaryList } from './NoExistDiaryList';
import { useEffect } from 'react';

export default function DiaryListPage() {
  const { data: DiaryData, refetch } = useGetDiaryResultQuery();

  useEffect(() => {
    refetch();
  }, []);

  if (DiaryData?.length === 0) {
    return <NoExistDiaryList />;
  }

  return (
    <Container>
      <ResultBox>
        <ResultType>
          <span>일기장</span>
        </ResultType>
        {DiaryData?.map((diary, index) => (
          <Link key={index} to={'/diary/result'} state={diary}>
            <ResultDetail>
              <div>
                날짜: <span>{diary.date}</span>
              </div>
              <IoCalendarNumberOutline />
            </ResultDetail>
          </Link>
        ))}
      </ResultBox>
    </Container>
  );
}
