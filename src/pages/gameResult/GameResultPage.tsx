import { Result } from '../../components/result/Result';
import { useGameResultEvents } from './events';
import { Container } from './styles';

export default function GameResultPage() {
  const { BlockGame, CompositionGame, SelectCardGame, ChoiceNumGame } = useGameResultEvents();

  return (
    <Container>
      <Result gameObj={BlockGame} slice={'slice'} />
      <Result gameObj={CompositionGame} slice={'slice'} />
      <Result gameObj={SelectCardGame} slice={'slice'} />
      <Result gameObj={ChoiceNumGame} slice={'slice'} />
    </Container>
  );
}
