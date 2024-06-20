import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contex/auth';

export const AuthLayout = () => {
  const { state } = useContext(AuthContext);

  if (state.logedIn) {
    return <Navigate to="/marvel" replace />;
  }

  return <Outlet />;
};
