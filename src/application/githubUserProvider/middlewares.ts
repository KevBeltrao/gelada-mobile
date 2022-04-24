import { Dispatch } from 'react';
import { ActionType } from './types';
import { githubUserRequests } from '../../infrastructure/api';

export const detailUser = async (
  action: ActionType,
  callback: Dispatch<ActionType>,
) => {
  const userInfo = await githubUserRequests.detail(
    action.payload.login as string,
  );

  callback({
    ...action,
    payload: userInfo,
  });
};
