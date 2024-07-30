import { styled } from 'styled-components';

export const FooterContainer = styled.div`
  background-color: #5d5d5d;
  overflow-x: hidden;
`;

export const FooterLogo = styled.div`
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0rem 1.5rem;
`;

export const FooterInfo = styled.div`
  height: 7rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0rem 1.5rem;

  font-size: 16px;
  font-weight: 500;
  color: white;

  white-space: nowrap;

  table {
    width: 100%;
  }

  td {
    padding: 0.3rem 0rem;
  }

  .info {
    font-weight: bold;
    text-align: left;
    width: 5rem;
  }
`;

export const FooterCopyright = styled.div`
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  font-weight: 500;
  color: white;

  white-space: nowrap;
`;
