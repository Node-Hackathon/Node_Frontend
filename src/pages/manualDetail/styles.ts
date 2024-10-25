import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Title1 } from '../../components/text/Text';

export const ManualDetailContainer = styled.section`
  width: 100%;
  display: flex;
  padding: 1.25rem;
  overflow-x: hidden;
`;

export const ManualDetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

export const ManualDetailTitle = styled(Title1)`
  min-width: 20rem;
`;

export const ManualDetailList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

export const ManualDetailBox = styled.div`
  width: 20rem;
  height: auto;
  border-radius: 0.5rem;
  border: 1px solid ${theme.colors.primaryNormal};
  display: flex;
  flex-direction: column;
  gap: 0.87rem;
  padding: 1.25rem 1.25rem 1.5rem;
`;

export const ManualDetailImage = styled.div<{ isFirst?: boolean }>`
  display: flex;
  justify-content: center;

  img {
    width: ${({ isFirst }) => (isFirst ? '16rem' : '8.75rem')};
  }
`;

export const ManualDetailContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    width: 1.8125rem;
    height: 1.8125rem;
    min-width: 1.8125rem;
    min-height: 1.8125rem;
    border-radius: 50%;
    background-color: ${theme.colors.primaryNormal};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.backgroundNormal};
    font-size: 1.125rem;
    font-weight: 700;
  }

  span {
    word-break: keep-all;
    white-space: normal;
  }
`;
