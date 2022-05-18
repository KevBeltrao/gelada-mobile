import * as React from 'react';

import { Match } from '../../../application/matchesProvider/types';
import Button from '../../components/Button';
import MatchCard from '../../components/MatchCard';
import { Container, Loading, InnerContainer, Title, Gap } from './styles';

interface MatchDetailTypes {
  isLoading: boolean;
  matches: Match[];
}

const MatchDetail: React.FC<MatchDetailTypes> = ({ matches, isLoading }) => (
  <Container>
    <InnerContainer>
      <Gap />
      <Button fill>Iniciar nova partida</Button>
      <Gap />

      {matches
        .filter(({ isActive }) => isActive)
        .map((match: Match) => (
          <MatchCard
            key={String(match._id)}
            goalsA={match.goalsA}
            goalsB={match.goalsB}
            isActive={match.isActive}
          />
        ))}

      <Title>Partidas finalizadas</Title>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          {matches
            .filter(({ isActive }) => !isActive)
            .map((match: Match) => (
              <MatchCard
                key={String(match._id)}
                goalsA={match.goalsA}
                goalsB={match.goalsB}
                isActive={match.isActive}
              />
            ))}
        </>
      )}
    </InnerContainer>
  </Container>
);

export default MatchDetail;
