import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const modalCustomStyles = {
  content: {
    width: '20rem',
    height: '12.5rem',
    padding: '2.5rem 1.75rem 1.75rem',
    borderRadius: '0.625rem',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
`;

export const ModalTitle = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.colors.textBlack};
  align-items: center;
`;

export const ModalButton = styled.div`
  display: flex;
  gap: 1rem;
`;
