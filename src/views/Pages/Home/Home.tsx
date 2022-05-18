import React, { FC } from 'react';
import MatchCard from '../../components/MatchCard';
import { Container, Logo } from './styles';

const Home: FC = () => {
  return (
    <Container>
      <Logo />

      <MatchCard goalsA={3} goalsB={2} isActive />
    </Container>
  );
};

export default Home;
