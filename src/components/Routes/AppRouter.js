import { RoutesMapper } from "./RoutesMapper";
import { Route, Switch } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Switch>
      {RoutesMapper.map(({ path, component }) => {
        return (
          <Route key={path} path={path} component={component} exact></Route>
        );
      })}
    </Switch>
  );
};
