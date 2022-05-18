import * as React from 'react';
import { Match } from '../../../application/matchesProvider/types';

import ScoreHandler from '../../components/ScoreHandler';
import Button from '../../components/Button';
import {
  Container,
  Title,
  ScoreContainer,
  MultiplySign,
  InnerContainer,
  Image,
  Loading,
} from './styles';

interface MatchDetailTypes {
  incrementA: () => Promise<void>;
  incrementB: () => Promise<void>;
  match: Match;
  endMatch: () => Promise<void>;
  isEndingMatch: boolean;
}

const MatchDetail: React.FC<MatchDetailTypes> = ({
  incrementA,
  incrementB,
  match,
  isEndingMatch,
  endMatch,
}) => (
  <Container>
    <InnerContainer>
      <Title>Placar</Title>

      <Image />

      <ScoreContainer>
        <ScoreHandler increment={incrementA} goals={match.goalsA}>
          Azul
        </ScoreHandler>

        <MultiplySign />

        <ScoreHandler increment={incrementB} goals={match.goalsB}>
          Vermelho
        </ScoreHandler>
      </ScoreContainer>

      <Button type="secondary" fill onPress={endMatch}>
        {isEndingMatch ? <Loading /> : 'Finalizar partida'}
      </Button>
    </InnerContainer>
  </Container>
);

export default MatchDetail;
