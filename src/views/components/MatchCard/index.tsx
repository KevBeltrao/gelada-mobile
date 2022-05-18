import * as React from 'react';
import MatchCard from './MatchCard';

interface WrapperTypes {
  goalsA: number;
  goalsB: number;
  isActive: boolean;
}

const Wrapper: React.FC<WrapperTypes> = ({ goalsA, goalsB, isActive }) => {
  return <MatchCard goalsA={goalsA} goalsB={goalsB} isActive={isActive} />;
};

export default Wrapper;
