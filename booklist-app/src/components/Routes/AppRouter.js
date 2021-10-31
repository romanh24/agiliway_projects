import { Switch, Route } from "react-router-dom";
import { RouterConfig } from "./RouterConfig";

const AppRouter = () => {
  return (
    <div>
      <Switch>
        {RouterConfig.map(({ path, component }) => {
          return <Route key={path} path={path} component={component} exact />;
        })}
      </Switch>
    </div>
  );
};

export default AppRouter;
