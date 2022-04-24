// ============= THIS FILE IS A GITHUB INTEGRATION TO BE USED AS AN EXAMPLE ===========
import React, { FC, createContext, useReducer } from 'react';
import * as actions from './actions';
import * as middlewares from './middlewares';
import reducer from './reducer';
import { ActionType, ContextType, ReducerType } from './types';

const INITIAL_VALUE = {};

export const GithubUserContext = createContext<ContextType>({
  githubUser: {},
  githubUserDispatch: async () => undefined,
});

const Provider: FC = ({ children }) => {
  const [githubUser, githubUserDispatch] = useReducer<ReducerType>(
    reducer,
    INITIAL_VALUE,
  );

  const dispatchWithMiddlewares = async (action: ActionType) => {
    if (actions.GET_USER === action.type) {
      return await middlewares.detailUser(action, githubUserDispatch);
    }

    return githubUserDispatch(action);
  };

  return (
    <GithubUserContext.Provider
      value={{ githubUser, githubUserDispatch: dispatchWithMiddlewares }}
    >
      {children}
    </GithubUserContext.Provider>
  );
};

export default Provider;
