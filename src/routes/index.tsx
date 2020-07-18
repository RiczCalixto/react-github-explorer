import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DashboardPage, RepositoryPage } from '../pages';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={DashboardPage} />
    <Route path="/repository/:fullName+" component={RepositoryPage} />
  </Switch>
);
