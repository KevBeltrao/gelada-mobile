import { Dispatch } from 'react';

export interface Match {
  goalsA: number;
  goalsB: number;
  isActive: boolean;
  _id: unknown;
  ownerId: unknown;
}

export interface MatchOptional {
  goalsA?: number;
  goalsB?: number;
  isActive?: boolean;
  _id?: unknown;
  ownerId?: unknown;
}

export type ActionTypeOptions = 'CREATE' | 'DETAIL' | 'LIST' | 'UPDATE';

export interface ActionType {
  type: ActionTypeOptions;
  payload: Match[];
}

export type MatchDispatchType = Dispatch<ActionType>;

export type DispatchWithMiddlewaresType = (action: ActionType) => Promise<void>;

export interface MatchContextType {
  matches: Match[];
  matchesDispatch: DispatchWithMiddlewaresType;
}

export type ReducerType = (state: Match[], action: ActionType) => Match[];
