import * as React from 'react';

import { Container, Question } from './styles';

const SlideUpConfirmation: React.FC = () => (
  <Container>
    <Question>Tem certeza que deseja finalizar a partida?</Question>
  </Container>
);

export default SlideUpConfirmation;
