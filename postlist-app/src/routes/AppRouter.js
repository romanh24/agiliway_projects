import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { RouterConfig } from "./RouterConfig";
import PropTypes from "prop-types";

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        {RouterConfig.map(({ path, component }) => {
          return <Route key={path} path={path} component={component} exact />;
        })}
      </Switch>
    );
  }
}

AppRouter.propTypes = {
  path: PropTypes.string,
  component: PropTypes.func,
};
export default AppRouter;
