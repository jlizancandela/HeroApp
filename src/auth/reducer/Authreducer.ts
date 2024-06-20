import { types } from './types';

export type Session = {
  user: string | null;
  logedIn: boolean;
};

export type Action = {
  type: string;
  payload: string | null;
};

export const AuthReducer = (state: Session, action: Action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        user: action.payload,
        logedIn: true,
      };
    case types.LOGOUT:
      return {
        ...state,
        user: null,
        logedIn: false,
      };
    default:
      return state;
  }
};
