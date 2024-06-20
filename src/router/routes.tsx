import { createBrowserRouter } from 'react-router-dom';

import { App } from '../App';
import { MarvelPage, DcPage, HeroPage, SearchPage } from '../heroes';
import { LoginPage } from '../auth';
import { HeroesLayout } from '../heroes/layouts/layout';
import { AuthLayout } from '../auth/layouts/layout';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <HeroesLayout />,
    children: [{ path: '/', element: <App /> }],
  },
  {
    path: '/marvel',
    element: <HeroesLayout />,
    children: [{ path: '/marvel', element: <MarvelPage /> }],
  },
  {
    path: '/dc',
    element: <HeroesLayout />,
    children: [{ path: '/dc', element: <DcPage /> }],
  },
  {
    path: 'hero/:id',
    element: <HeroesLayout />,
    children: [{ path: '/hero/:id', element: <HeroPage /> }],
  },
  {
    path: '/search',
    element: <HeroesLayout />,
    children: [{ path: '/search', element: <SearchPage /> }],
  },
  {
    path: '/login',
    element: <AuthLayout />,
    children: [{ path: '/login', element: <LoginPage /> }],
  },
]);
