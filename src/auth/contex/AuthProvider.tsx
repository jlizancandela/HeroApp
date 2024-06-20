import { useCallback, useMemo, useReducer } from 'react';
import { AuthContext } from './auth';
import { AuthReducer } from '../reducer/Authreducer';
import { types } from '../reducer/types';

interface AuthContextType {
  state: { user: string | null; logedIn: boolean }; // Cambia 'any' por el tipo correcto
  onLogin: (user: string) => void;
  onLogout: () => void;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState = { user: null, logedIn: false };

  const inicialicer = () => JSON.parse(localStorage.getItem('login') || '{}');

  const [state, dispatch] = useReducer(AuthReducer, initialState, inicialicer);

  const onLogin = useCallback((user: string) => {
    dispatch({ type: types.LOGIN, payload: user });
    localStorage.setItem('login', JSON.stringify({ user, logedIn: true }));
  }, []);

  const onLogout = useCallback(() => {
    dispatch({ type: types.LOGOUT, payload: null });
    localStorage.removeItem('login');
  }, []);

  const Provider = useMemo<AuthContextType>(() => ({ state, onLogin, onLogout }), [state, onLogin, onLogout]);

  return <AuthContext.Provider value={Provider}>{children}</AuthContext.Provider>;
};
