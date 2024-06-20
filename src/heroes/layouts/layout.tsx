import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { Navbar } from '../../ui/components/navbar';
import { AuthContext } from '../../auth';

export const HeroesLayout = () => {
  const { state } = useContext(AuthContext);

  if (!state.logedIn) {
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};
