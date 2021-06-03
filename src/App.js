import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";
import { handleInitialData } from "./store/shared";
import Routes from "./components/Routes";
class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    const { authUser } = this.props;
    return (
      <Router>
        <div className="main-container">
          <Routes notLoggedIn={authUser} />
        </div>
      </Router>
    );
  }
}
App.propTypes = {
  handleInitialData: PropTypes.func.isRequired,
  authUser: PropTypes.bool.isRequired,
};

function mapStateToProps({ authUser }) {
  return {
    authUser: authUser !== null ? true : false,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleInitialData: () => {
      dispatch(handleInitialData());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
