import { Link } from 'react-router-dom';
import { ResultBox, ResultDetail, ResultType } from '../../components/result/styles';
import { useGetDiaryResultQuery } from '../../services/diary/diaryApi';
import { Container } from '../gameResult/styles';
import { IoCalendarNumberOutline } from 'react-icons/io5';

export default function DiaryListPage() {
  const { data: DiaryData } = useGetDiaryResultQuery();

  // console.log(DiaryData);
  // console.log(DiaryData?.[0].userId);

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
