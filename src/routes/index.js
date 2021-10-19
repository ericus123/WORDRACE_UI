import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RouteNames } from "../config/RouteNames";
import HomePage from "../pages/home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={RouteNames.home} component={HomePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
