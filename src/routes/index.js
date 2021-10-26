import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RouteNames } from "../config/RouteNames";
import HomePage from "../pages/home";
import NotFound from "../pages/404";
import AuthPage from "../pages/auth";
import LeaderBoardPage from "../pages/leaderboard";
import PlayGround from "../pages/playground";
import Footer from "../components/footer";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={RouteNames.home} component={HomePage} />
        <Route exact path={RouteNames.auth} component={AuthPage} />
        <Route exact path={RouteNames.playground} component={PlayGround} />
        <Route
          exact
          path={RouteNames.leaderboard}
          component={LeaderBoardPage}
        />

        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
