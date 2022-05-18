import * as React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  MatchesContext,
  matchActions,
} from '../../../application/matchesProvider';
import { Match } from '../../../application/matchesProvider/types';
import MatchDetail from './MatchDetail';

interface WrapperTypes {
  route: {
    params: Match;
  };
  navigation: NativeStackNavigationProp<{
    MatchDetail: Match;
  }>;
}

const { useContext, useState } = React;

const Wrapper: React.FC<WrapperTypes> = ({ route, navigation }) => {
  const { params } = route;

  const { matchesDispatch } = useContext(MatchesContext);
  const [match, setMatch] = useState(params);
  const [isEndingMatch, setIsEndingMatch] = useState(false);

  const incrementA = async () => {
    await matchesDispatch({
      type: matchActions.UPDATE,
      payload: [
        {
          ...match,
          goalsA: match.goalsA + 1,
        },
      ],
    });

    setMatch({
      ...match,
      goalsA: match.goalsA + 1,
    });
  };

  const incrementB = async () => {
    await matchesDispatch({
      type: matchActions.UPDATE,
      payload: [
        {
          ...match,
          goalsB: match.goalsB + 1,
        },
      ],
    });

    setMatch({
      ...match,
      goalsB: match.goalsB + 1,
    });
  };

  const endMatch = async () => {
    setIsEndingMatch(true);
    await matchesDispatch({
      type: matchActions.UPDATE,
      payload: [
        {
          ...match,
          isActive: false,
        },
      ],
    });

    setMatch({
      ...match,
      isActive: false,
    });

    setIsEndingMatch(false);
    navigation.goBack();
  };

  return (
    <MatchDetail
      match={match}
      incrementA={incrementA}
      incrementB={incrementB}
      endMatch={endMatch}
      isEndingMatch={isEndingMatch}
    />
  );
};

export default Wrapper;
