import { useOutlet } from 'react-router-dom';

export default function Home() {
  const outlet = useOutlet();

  return <>{outlet}</>;
}
