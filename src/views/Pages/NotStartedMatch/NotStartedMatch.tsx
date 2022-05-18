import React, { FC } from 'react';
import {
  Container,
  Whistle,
  ScreenText,
  InnerContent,
  Loading,
} from './styles';
import Button from '../../components/Button';

interface NotStartedMatchTypes {
  createNewMatch: () => Promise<void>;
  isLoading: boolean;
}

const NotStartedMatch: FC<NotStartedMatchTypes> = ({
  createNewMatch,
  isLoading,
}) => (
  <Container>
    <InnerContent>
      <Whistle />

      <ScreenText>Nenhuma partida foi iniciada</ScreenText>

      <Button type="primary" fill onPress={createNewMatch}>
        Iniciar nova partida
      </Button>

      {isLoading && <Loading />}
    </InnerContent>
  </Container>
);

export default NotStartedMatch;
