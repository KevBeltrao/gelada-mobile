import * as React from 'react';
import {
  Container,
  TeamContainer,
  Circle,
  TeamLetter,
  TeamText,
  ScoreNumber,
  MultiplySign,
} from './styles';

interface MatchCardTypes {
  goalsA: number;
  goalsB: number;
  isActive: boolean;
}

const MatchCard: React.FC<MatchCardTypes> = ({ goalsA, goalsB }) => (
  <Container>
    <TeamContainer>
      <Circle>
        <TeamLetter>A</TeamLetter>
      </Circle>

      <TeamText>Azul</TeamText>
    </TeamContainer>

    <ScoreNumber>{goalsA}</ScoreNumber>
    <MultiplySign />
    <ScoreNumber>{goalsB}</ScoreNumber>

    <TeamContainer>
      <Circle red>
        <TeamLetter red>V</TeamLetter>
      </Circle>

      <TeamText>Vermelho</TeamText>
    </TeamContainer>
  </Container>
);

export default MatchCard;
