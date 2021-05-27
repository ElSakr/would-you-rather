import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { unAuthUser } from "../store/authuser";

class Logout extends Component {
  componentDidMount() {
    this.props.dispatch(unAuthUser());
  }
  render() {
    return <Redirect to="/" />;
  }
}

export default connect()(Logout);
