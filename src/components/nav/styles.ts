import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(100%);
    }
`;

const fadeOut = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0%);
    }
`;

export const NavContainer = styled.div<{ $isClosing: boolean }>`
  width: 100%;
  height: 100%;

  padding: 2rem 0rem;

  animation: ${({ $isClosing }) => ($isClosing ? fadeIn : fadeOut)} 0.4s ease-in-out;
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  padding: 1.5rem 1.88rem;
  font-weight: 600;
  font-size: 20px;
  color: #000;
`;

export const NavDetails = styled.details``;

export const NavSummary = styled.summary`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem 1.88rem;
  font-weight: 600;
  font-size: 20px;
  color: #000;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;

  padding: 1rem 2.5rem;
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

export const StateBtn = styled.div`
  padding: 1rem 1.88rem;
  font-size: 13px;
  font-weight: 500;
  color: #5d5d5d;
`;
