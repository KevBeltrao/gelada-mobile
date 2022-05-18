import React, { FC, createContext, useReducer } from 'react';
import * as actions from './actions';
import * as middlewares from './middlewares';
import reducer from './reducer';
import { ActionType, MatchContextType, ReducerType, Match } from './types';

const INITIAL_VALUE: Match[] = [];

export const MatchesContext = createContext<MatchContextType>({
  matches: [],
  matchesDispatch: async () => undefined,
});

const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [matches, matchesDispatch] = useReducer<ReducerType>(
    reducer,
    INITIAL_VALUE,
  );

  const dispatchWithMiddlewares = async (action: ActionType) => {
    if (actions.LIST === action.type) {
      return await middlewares.getMatches(action, matchesDispatch);
    }
    if (actions.CREATE === action.type) {
      return await middlewares.createMatch(action, matchesDispatch);
    }
    if (actions.UPDATE === action.type) {
      return await middlewares.updateMatch(action, matchesDispatch);
    }

    return matchesDispatch(action);
  };

  return (
    <MatchesContext.Provider
      value={{ matches, matchesDispatch: dispatchWithMiddlewares }}
    >
      {children}
    </MatchesContext.Provider>
  );
};

export default AuthProvider;
