import { createContext } from 'react';

interface AuthContextType {
  state: { user: string | null; logedIn: boolean };
  onLogin: (user: string) => void;
  onLogout: () => void;
}

// Creamos el contexto con un valor predeterminado
export const AuthContext = createContext<AuthContextType>({
  state: { user: null, logedIn: false },
  onLogin: () => {},
  onLogout: () => {},
});
