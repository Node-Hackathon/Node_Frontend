import { HeaderContainer } from './styles';
import { FaBars } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';
import { ReactComponent as Logo } from '../../assets/images/Logo-s.svg';
import Nav from '../nav/Nav';
import { useToggleHamberger } from './events';
import { HeaderType } from './types';
import { Link } from 'react-router-dom';

function Header({ isHambergerOpen, setIsHambergerOpen }: HeaderType) {
  const { isClosing, handleToggleHamberger } = useToggleHamberger({
    isHambergerOpen,
    setIsHambergerOpen,
  });

  return (
    <>
      <HeaderContainer>
        <Link to="/main">
          <Logo />
        </Link>
        {!isHambergerOpen && <FaBars size={32} onClick={handleToggleHamberger} />}
        {isHambergerOpen && <FaXmark size={32} onClick={handleToggleHamberger} />}
      </HeaderContainer>
      {isHambergerOpen && <Nav isClosing={isClosing} setIsHambergerOpen={setIsHambergerOpen} />}
    </>
  );
}

export default Header;
