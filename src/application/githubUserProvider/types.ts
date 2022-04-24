import { Dispatch } from 'react';
import { ActionTypeType } from './actions';

export interface GithubUserType {
  login?: string;
  id?: number;
  avatar_url?: string;
  repos_url?: string;
}

export interface ActionType {
  type: ActionTypeType;
  payload: GithubUserType;
}

export type GithubUserDispatchType = Dispatch<ActionType>;

export type DispatchWithMiddlewaresType = (action: ActionType) => Promise<void>;

export interface ContextType {
  githubUser: GithubUserType;
  githubUserDispatch: DispatchWithMiddlewaresType;
}

export type ReducerType = (
  state: GithubUserType,
  action: ActionType,
) => GithubUserType;
