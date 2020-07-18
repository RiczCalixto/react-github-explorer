import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface NavigationParams {
  fullName: string;
}

export const RepositoryPage: React.FC = () => {
  const { params } = useRouteMatch<NavigationParams>();

  return <h1>RIcorico{params.fullName}</h1>;
};
