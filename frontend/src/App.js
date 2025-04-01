import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminRoutes from './routes/AdminRoutes.js';
import ClientRoutes from './routes/ClientRoutes.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin/*" component={AdminRoutes} />
        <Route path="/*" component={ClientRoutes} />
      </Switch>
    </Router>
  );
}

export default App;
