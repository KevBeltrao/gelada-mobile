import * as React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  MatchesContext,
  matchActions,
} from '../../../application/matchesProvider';
import MatchList from './MatchList';
import { Match } from '../../../application/matchesProvider/types';

const { useState, useContext, useEffect } = React;

interface WrapperTypes {
  navigation: NativeStackNavigationProp<{
    MatchDetail: Match;
  }>;
}

const Wrapper: React.FC<WrapperTypes> = ({ navigation }) => {
  const { matches, matchesDispatch } = useContext(MatchesContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreatingMatch, setIsCreatingMatch] = useState(false);

  const listMatches = async () => {
    setIsLoading(true);

    await matchesDispatch({
      type: matchActions.LIST,
      payload: [],
    });

    setIsLoading(false);
  };

  const createMatch = async () => {
    setIsCreatingMatch(true);

    await matchesDispatch({
      type: matchActions.CREATE,
      payload: [],
    });

    setIsCreatingMatch(false);
  };

  useEffect(() => {
    listMatches();
  }, []);

  const redirect = (match: Match) => {
    navigation.push('MatchDetail', match);
  };

  return (
    <MatchList
      matches={matches}
      isLoading={isLoading}
      redirect={redirect}
      isCreatingMatch={isCreatingMatch}
      createMatch={createMatch}
    />
  );
};

export default Wrapper;
