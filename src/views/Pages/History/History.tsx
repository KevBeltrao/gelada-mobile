import React, { FC } from 'react';
import { Container, Whistle, ScreenText } from './styles';
import Button from '../../components/Button';

const History: FC = () => (
  <Container>
    <Whistle />
    <ScreenText>Nenhuma partida foi iniciada</ScreenText>
    <Button>Iniciar nova partida</Button>
  </Container>
);

export default History;
