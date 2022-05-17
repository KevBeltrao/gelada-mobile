import { Dispatch } from 'react';
import { ActionType } from './types';
import { authenticationRequests } from '../../infrastructure/api';

export const authenticate = async (
  action: ActionType,
  dispatch: Dispatch<ActionType>,
) => {
  const userInfo = await authenticationRequests.authenticate(
    action.payload.email as string,
    action.payload.password as string,
  );

  dispatch({
    ...action,
    ...userInfo,
  });
};
