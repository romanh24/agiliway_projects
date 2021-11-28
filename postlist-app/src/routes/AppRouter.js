import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouterConfig } from './RouterConfig';

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        {RouterConfig.map(({ path, component }) => (
          <Route key={path} path={path} component={component} exact />
        ))}
      </Switch>
    );
  }
}

export default AppRouter;
