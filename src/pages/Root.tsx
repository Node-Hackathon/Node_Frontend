import { useOutlet } from 'react-router-dom';
import Home from './Home';

export default function Root() {
  const outlet = useOutlet();

  return <>{outlet || <Home />}</>;
}
