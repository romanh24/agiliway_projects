import { RouterConfig } from "./RouterConfig";
import { Route, Switch } from "react-router-dom";

const AppRouter = () => {
  return (
    <Switch>
      {RouterConfig.map(({ path, component }) => {
        return <Route key={path} path={path} component={component} exact />;
      })}
    </Switch>
  );
};

export default AppRouter;
