import { Dispatch } from 'react';
import { ActionTypeType } from './actions';

export interface UserType {
  email?: string;
  name?: string;
  phone_number?: string;
}

export interface ActionType {
  type: ActionTypeType;
  payload: {
    email: UserType['email'];
    password: string;
  };
}

export type UserDispatchType = Dispatch<ActionType>;

export type DispatchWithMiddlewaresType = (action: ActionType) => Promise<void>;

export interface ContextType {
  user: UserType;
  userDispatch: DispatchWithMiddlewaresType;
}

export type ReducerType = (state: UserType, action: ActionType) => UserType;
