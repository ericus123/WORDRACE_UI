import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RouteNames } from "../config/RouteNames";
import HomePage from "../pages/home";
import NotFound from "../pages/404";
import AuthPage from "../pages/auth";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={RouteNames.home} component={HomePage} />
        <Route exact path={RouteNames.auth} component={AuthPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
