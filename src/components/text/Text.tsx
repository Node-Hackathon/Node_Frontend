import { styled } from 'styled-components';
import { TextType } from './types';
import { theme } from '../../styles/theme';

const Title = styled.h1<TextType>`
  color: ${({ color }) => color || `${theme.colors.textBlack}`};
  white-space: nowrap;
`;
const Typography = styled.span<TextType>`
  color: ${({ color }) => color || `${theme.colors.textBlack}`};
  white-space: nowrap;
`;

const Title1 = styled(Title)`
  ${theme.typography.title1};
`;

const Title2 = styled(Title)`
  ${theme.typography.title2};
`;

const Title3 = styled(Title)`
  ${theme.typography.title3};
`;

const Title4 = styled(Title)`
  ${theme.typography.title4};
`;

const Body1 = styled(Typography)`
  ${theme.typography.body1};
`;

const Body2 = styled(Typography)`
  ${theme.typography.body2};
`;

const Body3 = styled(Typography)`
  ${theme.typography.body3};
`;

const Body4 = styled(Typography)`
  ${theme.typography.body4};
`;

const Label1 = styled(Typography)`
  ${theme.typography.label1};
`;

const Label2 = styled(Typography)`
  ${theme.typography.label2};
`;

const Label3 = styled(Typography)`
  ${theme.typography.label3};
`;

const Label4 = styled(Typography)`
  ${theme.typography.label4};
`;

const Label5 = styled(Typography)`
  ${theme.typography.label5};
`;

const Label6 = styled(Typography)`
  ${theme.typography.label6};
`;

const Label7 = styled(Typography)`
  ${theme.typography.label7};
`;

export {
  Title1,
  Title2,
  Title3,
  Title4,
  Body1,
  Body2,
  Body3,
  Body4,
  Label1,
  Label2,
  Label3,
  Label4,
  Label5,
  Label6,
  Label7,
};
