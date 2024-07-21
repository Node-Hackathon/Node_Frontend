import { HeaderContainer } from './styles';
import { FaBars } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';
import { ReactComponent as Logo } from '../../assets/images/Logo-s.svg';
import { HeaderType } from './types';

function Header({ isHambergerOpen, handleToggleHamberger }: HeaderType) {
  return (
    <>
      <HeaderContainer>
        <Logo />
        {!isHambergerOpen && <FaBars size={32} onClick={handleToggleHamberger} />}
        {isHambergerOpen && <FaXmark size={32} onClick={handleToggleHamberger} />}
      </HeaderContainer>
    </>
  );
}

export default Header;
