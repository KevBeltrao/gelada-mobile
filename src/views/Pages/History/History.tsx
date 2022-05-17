import React, { FC } from 'react';
import { Container, Whistle, ScreenText, InnerContent } from './styles';
import Button from '../../components/Button';

const History: FC = () => (
  <Container>
    <InnerContent>
      <Whistle />

      <ScreenText>Nenhuma partida foi iniciada</ScreenText>

      <Button type="primary" fill>
        Iniciar nova partida
      </Button>
    </InnerContent>
  </Container>
);

export default History;
