import { useTotalReslutEvents } from './events';
import { CustomDetails } from '../../components/details/CustomDetails';

export default function DiagnosisTotalReslutPage() {
  const { Diagnosis } = useTotalReslutEvents();

  return <CustomDetails Diagnosis={Diagnosis} />;
}
