import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/admin/Dashboard.js'

function AdminRoutes() {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default AdminRoutes;
