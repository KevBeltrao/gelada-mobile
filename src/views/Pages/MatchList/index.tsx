import * as React from 'react';
import {
  MatchesContext,
  matchActions,
} from '../../../application/matchesProvider';
import MatchList from './MatchList';

const { useState, useContext, useEffect } = React;

const Wrapper: React.FC = () => {
  const { matches, matchesDispatch } = useContext(MatchesContext);
  const [isLoading, setIsLoading] = useState(true);

  const listMatches = async () => {
    setIsLoading(true);

    await matchesDispatch({
      type: matchActions.LIST,
      payload: [],
    });

    setIsLoading(false);
  };

  useEffect(() => {
    listMatches();
  }, []);

  return <MatchList matches={matches} isLoading={isLoading} />;
};

export default Wrapper;
