import styled from 'styled-components';
import MainBanner from '../../assets/images/MainBanner.png';

export const MainContainer = styled.div``;

export const Description = styled.div`
  width: 100%;
  height: fit-content;

  margin: 1.5rem 0rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.div<{ fontSize?: string; $marginTop?: string; color?: string }>`
  color: ${(props) => props.color || 'white'};
  font-weight: 700;
  font-size: ${(props) => props.fontSize || '28px'};
  margin-top: ${(props) => props.$marginTop || '0rem'};
  text-align: center;
`;

export const Banner = styled.div`
  background-image: url(${MainBanner});
  background-size: cover;

  width: 100%;
  height: fit-content;

  padding: 2rem 0rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const GoToCheck = styled.div`
  width: 12rem;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-weight: 600;

  border-radius: 0.5rem;
  background-color: #055858;
`;

export const Education = styled.div`
  width: 100%;
  height: fit-content;

  padding: 2rem 0rem;

  background-color: #5fcf89;
`;

export const GoToEdu = styled.div`
  width: 90%;
  height: 10rem;

  padding: 2rem 2.5rem;
  margin: 0.5rem auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  background-color: white;
  border-radius: 0.5rem;
`;

export const EduType = styled.div`
  width: 70%;
  height: 5rem;

  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;

  white-space: nowrap;
`;

export const EduText = styled.div<{ fontSize?: string; fontWeight?: string }>`
  width: fit-content;
  height: fit-content;

  font-size: ${(props) => props.fontSize || '24px'};
  font-weight: ${(props) => props.fontWeight || '600'};
`;

export const EduImg = styled.div`
  width: 7rem;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Diary = styled.div`
  width: 100%;
  height: 12.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 2rem 1rem;

  background-color: #629bd9;
  position: relative;

  img {
    position: absolute;
    bottom: 2rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  margin-bottom: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const GoToDiary = styled.div`
  width: 12rem;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-weight: 600;

  border-radius: 0.5rem;
  background-color: #4145a8;

  position: relative;
  z-index: 999;
`;

export const Promotion = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  width: 100%;

  padding: 2rem 0rem;

  background-color: #d9d9d9;

  span {
    padding-right: 0.5rem;
    text-align: right;
  }
`;

export const PromotionImg = styled.div`
  width: 100%;
  height: fit-content;
`;
