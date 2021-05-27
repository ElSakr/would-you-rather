import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import QuestionDetails from "./QuestionDetails";
import NotFound from "./NotFound";

class QuestionPage extends Component {
  render() {
    const { autherUserAnsweres, match } = this.props;
    const id = match.params.id;
    const answered = autherUserAnsweres.hasOwnProperty(id) ? true : false;
    if (!this.props.authUser) {
      return <NotFound />;
    }
    return (
      <Fragment>
        <h2 className="text-center my-3">
          <small>Would You Rather...</small>
        </h2>
        <QuestionDetails id={id} answered={answered} />
      </Fragment>
    );
  }
}

function mapStateToProps({ authUser, users }) {
  const autherUserAnsweres = users[authUser].answers;

  return {
    autherUserAnsweres,
    authUser,
  };
}

export default connect(mapStateToProps)(QuestionPage);
