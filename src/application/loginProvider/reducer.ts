import * as Actions from './actions';
import { ActionType, UserType } from './types';

const reducer = (state: UserType, action: ActionType) => {
  switch (action.type) {
    case Actions.AUTHENTICATION:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
