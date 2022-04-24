// ============= THIS FILE IS A GITHUB INTEGRATION TO BE USED AS AN EXAMPLE ===========
import * as Actions from './actions';
import { ActionType, GithubUserType } from './types';

const reducer = (state: GithubUserType, action: ActionType) => {
  switch (action.type) {
    case Actions.GET_USER:
      return action.payload;
    case Actions.REMOVE_USER:
      return {};
    default:
      return state;
  }
};

export default reducer;
