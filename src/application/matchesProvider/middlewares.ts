import { Dispatch } from 'react';
import { ActionType } from './types';
import { matchesRequests } from '../../infrastructure/api';

export const getMatches = async (
  action: ActionType,
  dispatch: Dispatch<ActionType>,
) => {
  const matches = await matchesRequests.listMatches();

  dispatch({
    type: action.type,
    payload: matches,
  });
};

export const createMatch = async (
  action: ActionType,
  dispatch: Dispatch<ActionType>,
) => {
  const newMatch = await matchesRequests.createMatch();

  dispatch({
    type: action.type,
    payload: [newMatch],
  });
};

export const updateMatch = async (
  action: ActionType,
  dispatch: Dispatch<ActionType>,
) => {
  const [matchInfo] = action.payload;
  const { _id, ...body } = matchInfo;
  const updatedMatch = await matchesRequests.updateMatches(String(_id), body);

  dispatch({
    type: action.type,
    payload: [updatedMatch],
  });
};
