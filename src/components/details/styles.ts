import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100% - 4rem);
  height: fit-content;

  padding: 0rem 2rem;
  padding-bottom: 1.5rem;
`;

export const Details = styled.details<{ $isFirst: boolean; $isLast: boolean; $isOpen: boolean }>`
  ${({ $isFirst }) =>
    $isFirst &&
    `
    summary {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  `}

  ${({ $isLast, $isOpen }) =>
    $isLast &&
    `
    summary {
      ${$isOpen ? 'border-bottom-left-radius: 0px;' : 'border-bottom-left-radius: 10px;'}
      ${$isOpen ? 'border-bottom-right-radius: 0px;' : 'border-bottom-right-radius: 10px;'}
    },
    ul {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  `}
`;

export const Summary = styled.summary`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 1rem;
  font-weight: 400;
  font-size: 16px;
  color: #000;

  border: 1px solid #d9d9d9;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;

  padding: 1rem 1rem;
  font-size: 15px;
  font-weight: 400;
  color: #333;

  border: 1px solid #d9d9d9;
`;
