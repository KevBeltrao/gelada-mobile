import React, { FC } from 'react';
import SlideUpConfirmation from '../../components/SlideUpConfirmation';
import { Container, Logo } from './styles';

const Home: FC = () => {
  return (
    <Container>
      <Logo />

      <SlideUpConfirmation />
    </Container>
  );
};

export default Home;
