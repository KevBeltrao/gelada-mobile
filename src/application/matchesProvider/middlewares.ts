import { Dispatch } from 'react';
import { ActionType } from './types';
import { matchesRequests } from '../../infrastructure/api';

export const getMatches = async (
  action: ActionType,
  dispatch: Dispatch<ActionType>,
) => {
  const users = await matchesRequests.listMatches();

  dispatch({
    type: action.type,
    payload: users,
  });
};

export const updateMatch = async (
  action: ActionType,
  dispatch: Dispatch<ActionType>,
) => {
  const [matchInfo] = action.payload;
  const { _id, ...body } = matchInfo;
  const userInfo = await matchesRequests.updateMatches(String(_id), body);

  dispatch({
    type: action.type,
    payload: [userInfo],
  });
};
