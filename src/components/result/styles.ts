import { styled } from 'styled-components';

export const ResultBox = styled.div`
  width: 100%;
  height: fit-content;
`;

export const ResultType = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  padding: 2rem 0rem;

  color: black;
  font-size: 24px;
  font-weight: 700;
`;

export const ResultDetail = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  padding: 0.7rem 1rem;
  margin-bottom: 0.3rem;

  font-size: 16px;
  font-weight: 400;
  color: #5d5d5d;

  border: 1px solid lightgray;
  border-radius: 5px;

  span {
    color: black;
    font-weight: 500;
  }
`;

export const ImageBtn = styled.span`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.1rem 0.4rem;

  // background-color: #5fcf89;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-size: 10px;
`;

export const customStyles = {
  content: {
    width: 'fit-content',
    height: 'fit-content',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
