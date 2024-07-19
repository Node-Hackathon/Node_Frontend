import {
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
  Title1,
  Title2,
  Title3,
  Title4,
} from '../components/text/Text';
import { theme } from '../styles/theme';

export default function TextTest() {
  return (
    <>
      <Title1 color={theme.colors.textNeutral}>Title1</Title1>
      <Title2 color={theme.colors.textNeutral}>Title2</Title2>
      <Title3 color={theme.colors.textNeutral}>Title3</Title3>
      <Title4 color={theme.colors.textNeutral}>Title4</Title4>
      <Body1 color={theme.colors.textNeutral}>Body1</Body1>
      <Body2 color={theme.colors.textNeutral}>Body2</Body2>
      <Body3 color={theme.colors.textNeutral}>Body3</Body3>
      <Body4 color={theme.colors.textNeutral}>Body4</Body4>
      <Label1 color={theme.colors.textNeutral}>Label1</Label1>
      <Label2 color={theme.colors.textNeutral}>Label2</Label2>
      <Label3 color={theme.colors.textNeutral}>Label3</Label3>
      <Label4 color={theme.colors.textNeutral}>Label4</Label4>
      <Label5 color={theme.colors.textNeutral}>Label5</Label5>
      <Label6 color={theme.colors.textNeutral}>Label6</Label6>
    </>
  );
}
