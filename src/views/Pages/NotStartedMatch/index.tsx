import React, { FC, useContext, useState } from 'react';
import {
  MatchesContext,
  matchActions,
} from '../../../application/matchesProvider';

import NotStartedMatch from './NotStartedMatch';

const Wrapper: FC = () => {
  const { matchesDispatch } = useContext(MatchesContext);
  const [isLoading, setIsLoading] = useState(false);

  const createNewMatch = async () => {
    setIsLoading(true);

    await matchesDispatch({
      type: matchActions.CREATE,
      payload: [],
    });

    setIsLoading(false);
  };

  return (
    <NotStartedMatch isLoading={isLoading} createNewMatch={createNewMatch} />
  );
};

export default Wrapper;
