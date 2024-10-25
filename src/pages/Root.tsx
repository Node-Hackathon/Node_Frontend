import { useOutlet } from 'react-router-dom';
import ScrollToTop from '../hooks/useScrollToTop';

export default function Root() {
  const outlet = useOutlet();

  return (
    <>
      <ScrollToTop />
      {outlet}
    </>
  );
}
