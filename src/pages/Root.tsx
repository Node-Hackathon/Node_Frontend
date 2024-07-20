import { useOutlet } from 'react-router-dom';

export default function Root() {
  const outlet = useOutlet();

  return <>{outlet}</>;
}
