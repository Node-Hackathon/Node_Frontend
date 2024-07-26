import styled from 'styled-components';
import mainBanner from '../../assets/images/MainBanner.png';

export const MainContainer = styled.div``;

export const Banner = styled.div`
  background-image: url(${mainBanner});
  background-size: cover;
  height: 12rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    color: white;
    font-size: 28px;
    font-weight: 700;
  }
`;
