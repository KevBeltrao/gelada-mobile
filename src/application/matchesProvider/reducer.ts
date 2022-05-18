import * as actions from './actions';
import { ActionType, Match } from './types';

const reducer = (state: Match[], action: ActionType) => {
  switch (action.type) {
    case actions.LIST:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
