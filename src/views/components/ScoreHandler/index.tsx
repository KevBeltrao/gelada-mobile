import * as React from 'react';
import ScoreHandler from './ScoreHandler';

interface WrapperTypes {
  goals: number;
  increment: () => Promise<void>;
}

const { useState } = React;

const Wrapper: React.FC<WrapperTypes> = ({ children, goals, increment }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleIncrement = async () => {
    setIsLoading(true);
    await increment();
    setIsLoading(false);
  };

  return (
    <ScoreHandler
      isLoading={isLoading}
      increment={handleIncrement}
      goals={goals}
    >
      {children}
    </ScoreHandler>
  );
};

export default Wrapper;
