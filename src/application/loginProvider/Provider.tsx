import React, { FC, createContext, useReducer } from 'react';
import * as actions from './actions';
import * as middlewares from './middlewares';
import reducer from './reducer';
import { ActionType, ContextType, ReducerType } from './types';

const INITIAL_VALUE = {};

export const AuthenticationContext = createContext<ContextType>({
  user: {},
  userDispatch: async () => undefined,
});

const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, userDispatch] = useReducer<ReducerType>(reducer, INITIAL_VALUE);

  const dispatchWithMiddlewares = async (action: ActionType) => {
    if (actions.AUTHENTICATION === action.type) {
      return await middlewares.authenticate(action, userDispatch);
    }

    return userDispatch(action);
  };

  return (
    <AuthenticationContext.Provider
      value={{ user, userDispatch: dispatchWithMiddlewares }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthProvider;
