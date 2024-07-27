import styled from 'styled-components';
import { Label5, Label7 } from '../text/Text';
import { theme } from '../../styles/theme';
import { SecondaryButton } from '../button/Button';
import 'react-calendar/dist/Calendar.css';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.31rem;
`;

export const InputPlaceholder = styled(Label5).attrs({
  color: `${theme.colors.textHeavy}`,
})`
  margin-left: 1rem;
`;

export const InputBox = styled.div<{
  name?: string;
  size?: 'l' | 's';
  $iserror?: boolean;
}>`
  width: ${({ size, name }) =>
    name === 'file'
      ? size === 'l'
        ? '15.625rem'
        : '10.3125rem'
      : size === 'l'
        ? '20rem'
        : '10rem'};
  position: relative;
`;

export const InputBase = styled.input<{
  name?: string;
  size?: 'l' | 's';
  $iserror?: boolean;
}>`
  width: ${({ size }) => (size === 'l' ? '20rem' : '9.6875rem')};
  height: 3.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ $iserror }) => ($iserror ? theme.colors.error : theme.colors.textNormal)};
  background-color: ${theme.colors.backgroundNormal};
  padding: 0 ${({ name }) => (name === 'password' ? '3.5rem' : '1rem')} 0 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${theme.colors.textBlack};

  &::placeholder {
    color: ${theme.colors.textLight};
  }

  &:focus {
    border: 1px solid
      ${({ $iserror }) => ($iserror ? theme.colors.error : theme.colors.primaryNormal)};
  }
  cursor: ${({ name }) => (name === 'birth' || name === 'address') && 'pointer'};
`;

export const InputIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const InputTimer = styled.div`
  position: absolute;
  top: 1.19rem;
  right: 1rem;
`;

export const GenderInputBox = styled.div`
  display: flex;
  width: 20rem;
  justify-content: space-between;
`;

export const GenderButton = styled(SecondaryButton)<{ selected: boolean }>`
  width: 9.6875rem;
  background-color: ${({ selected }) =>
    selected ? theme.colors.primaryNormal : theme.colors.backgroundNormal};
  color: ${({ selected }) =>
    selected ? theme.colors.backgroundNormal : theme.colors.primaryStrong};
  border: ${({ selected }) => (selected ? 'none' : `1px solid ${theme.colors.primaryStrong}`)};
  cursor: pointer;
  transition: background-color 0.3s;
  transition: color 0.3s;
`;

export const CalendarWrapper = styled.div`
  position: relative;

  .react-calendar {
    color: ${theme.colors.textNeutral};
    border: 1px solid ${theme.colors.textNormal};
    border-radius: 0.5rem;
    position: absolute;
    top: 4.28rem;
    z-index: 10;
    padding: 0.25rem;
    font-family:
      'Pretendard',
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
  }

  button {
    background-color: #fff;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem 0.5rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${theme.colors.backgroundLight};
    }
  }

  .react-calendar__navigation {
    margin-bottom: 0.5rem;
    justify-content: center;

    button {
      font-size: 1rem;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .react-calendar__month-view {
    color: ${theme.colors.textNeutral};
  }

  .react-calendar__month-view__weekdays {
    abbr {
      text-decoration: none;
    }
  }

  .react-calendar__month-view__days__day {
    padding: 0.5rem 0.5rem 1.5rem;
    font-size: 0.75rem;

    &--weekend {
      color: ${theme.colors.error};
    }

    &--neighboringMonth {
      color: ${theme.colors.textLight};
    }
  }

  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background-color: ${theme.colors.primaryNormal};
    color: #fff;
  }
`;

export const customStyles = {
  content: {
    width: '70%',
    height: '61%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const InputMessage = styled(Label7)`
  margin-left: 0.38rem;
`;

export const ImageContainer = styled.div<{
  size?: 'l' | 's';
  $iserror?: boolean;
}>`
  width: ${({ size }) => (size === 's' ? '10.3125rem' : '15.625rem')};
  height: ${({ size }) => (size === 's' ? '10.3125rem' : '15.625rem')};
  min-width: ${({ size }) => (size === 's' ? '10.3125rem' : '15.625rem')};
  border-radius: 0.5rem;
  border: 1px solid ${({ $iserror }) => ($iserror ? theme.colors.error : theme.colors.textNormal)};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ImageBox = styled.input`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0.5rem;
`;
