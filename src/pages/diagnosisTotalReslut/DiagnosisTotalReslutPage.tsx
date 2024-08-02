import { CustomDetails } from '../../components/details/CustomDetails';
import { useGetDiagnosisByIdQuery } from '../../services/myPage/diagnosisApi';
import { useEffect } from 'react';

export default function DiagnosisTotalReslutPage() {
  const { data: DiagnosisData, refetch } = useGetDiagnosisByIdQuery();

  useEffect(() => {
    refetch();
  }, []);

  return <CustomDetails Diagnosis={DiagnosisData || []} />;
}
