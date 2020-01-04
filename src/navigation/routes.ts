import React from 'react';

export const DefaultLayout = React.lazy(() => import('containers/DefaultLayout'));

export const SignIn = React.lazy(() => import('pages/Public/SignIn'));

const Dashboard = React.lazy(() => import('pages/Secure/Dashboard'));
const UnitInfo = React.lazy(() => import('pages/Secure/UnitInfo'));

const routes = [
  {
    exact: true,
    name: 'Home',
    path: '/',
  },
  {
    component: Dashboard,
    exact: true,
    name: 'Dashboard',
    path: '/dashboard',
  },
  {
    component: UnitInfo,
    exact: true,
    name: 'UnitInfo',
    path: '/unitInfo/:id',
  },
];

export default routes;
