import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import Login from "./Login";
import NavBar from "./NavBar";
import Logout from "./Logout";
import Dashboard from "./Dashboard";
import QuestionPage from "./QuestionPage";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import NotFound from "./NotFound";

const Routes = (props) => {
  return (
    <div className="container">
      <Switch>
        {!props.notLoggedIn ? (
          <Fragment>
            <Route path="/" exact component={Login} />
          </Fragment>
        ) : (
          <Fragment>
            <NavBar />
            <Route path="/" exact component={Dashboard} />
            <Route path="/leaderboard" exact component={LeaderBoard} />
            <Route path="/add" component={NewQuestion} />
            <Route path="/questions/:id" component={QuestionPage} />
            <Route exact path="/logout" component={Logout} />
          </Fragment>
        )}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

Routes.propTypes = { notLoggedIn: PropTypes.any };

export default Routes;
