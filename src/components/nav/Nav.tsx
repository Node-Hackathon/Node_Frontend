import { useState } from 'react';
import { NavContainer, NavDetails, NavSummary, NavList, NavContent, StateBtn } from './styles';
import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleUp } from 'react-icons/fa6';
import { NavType } from './types';
import { Link } from 'react-router-dom';

function Nav({ isClosing }: NavType) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleToggleDetails = () => {
    setIsDetailsOpen((prevState) => !prevState);
  };

  return (
    <>
      <NavContainer isClosing={isClosing}>
        <Link to="/check">
          <NavContent>치매 진단</NavContent>
        </Link>
        <NavDetails onClick={handleToggleDetails}>
          <NavSummary>
            교육
            {!isDetailsOpen && <FaAngleDown />}
            {isDetailsOpen && <FaAngleUp />}
          </NavSummary>
          <Link to="/edu-4d">
            <NavList>포디프레임</NavList>
          </Link>
          <Link to="/edu-etc">
            <NavList>게임</NavList>
          </Link>
        </NavDetails>
        <Link to="/consulting">
          <NavContent>상담 센터</NavContent>
        </Link>
        <Link to="/mypage">
          <NavContent>마이페이지</NavContent>
        </Link>
        <StateBtn>로그아웃</StateBtn>
      </NavContainer>
    </>
  );
}

export default Nav;
