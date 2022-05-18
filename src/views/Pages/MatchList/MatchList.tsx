import * as React from 'react';

import { Match } from '../../../application/matchesProvider/types';
import Button from '../../components/Button';
import MatchCard from '../../components/MatchCard';
import {
  Container,
  Loading,
  InnerContainer,
  Title,
  Gap,
  Touchable,
} from './styles';

interface MatchDetailTypes {
  isLoading: boolean;
  matches: Match[];
  redirect: (match: Match) => void;
  isCreatingMatch: boolean;
  createMatch: () => Promise<void>;
}

const MatchDetail: React.FC<MatchDetailTypes> = ({
  matches,
  isLoading,
  redirect,
  isCreatingMatch,
  createMatch,
}) => (
  <Container>
    <InnerContainer>
      <Gap />
      <Button disabled={isCreatingMatch} fill onPress={createMatch}>
        {isCreatingMatch ? <Loading /> : 'Iniciar nova partida'}
      </Button>
      <Gap />

      {matches
        .filter(({ isActive }) => isActive)
        .map((match: Match) => (
          <Touchable key={String(match._id)} onPress={() => redirect(match)}>
            <MatchCard
              goalsA={match.goalsA}
              goalsB={match.goalsB}
              isActive={match.isActive}
            />
          </Touchable>
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
