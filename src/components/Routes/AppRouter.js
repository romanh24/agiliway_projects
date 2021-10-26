import { RouterConfig } from "./RouterConfig";
import { Route, Switch } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Switch>
      {RouterConfig.map(({ path, component }) => {
        return (
          <Route key={path} path={path} component={component} exact></Route>
        );
      })}
    </Switch>
  );
};
