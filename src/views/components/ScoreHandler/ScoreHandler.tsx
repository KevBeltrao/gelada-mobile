import * as React from 'react';
import {
  Container,
  GoalsNumber,
  IncrementButton,
  TeamName,
  Plus,
  Loading,
} from './styles';

interface ScoreHandlerTypes {
  goals: number;
  isLoading: boolean;
  increment: () => Promise<void>;
}

const ScoreHandler: React.FC<ScoreHandlerTypes> = ({
  goals,
  children,
  increment,
  isLoading,
}) => (
  <Container>
    <GoalsNumber>{goals}</GoalsNumber>

    <IncrementButton disabled={isLoading} onPress={increment}>
      {isLoading ? <Loading /> : <Plus />}

      <TeamName>{children}</TeamName>
    </IncrementButton>
  </Container>
);

export default ScoreHandler;
