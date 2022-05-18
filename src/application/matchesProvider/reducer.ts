import * as actions from './actions';
import { ActionType, Match } from './types';

const reducer = (state: Match[], action: ActionType) => {
  switch (action.type) {
    case actions.LIST:
      return action.payload;
    case actions.CREATE:
      return [action.payload[0], ...state];
    case actions.UPDATE:
      return (() => {
        const [updatedMatch] = action.payload;

        const index = state.findIndex(
          (match) => String(match._id) === String(updatedMatch._id),
        );

        return [
          ...state.slice(0, index),
          updatedMatch,
          ...state.slice(index + 1),
        ];
      })();
    default:
      return state;
  }
};

export default reducer;
