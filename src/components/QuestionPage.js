import React, { Component } from "react";
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
      <>
        <h2 className="text-center my-3">
          <span>Would You Rather ? </span>
        </h2>
        <QuestionDetails id={id} answered={answered} />
      </>
    );
  }
}

const mapStateToProps = ({ authUser, users }) => {
  const autherUserAnsweres = users[authUser].answers;

  return {
    autherUserAnsweres,
    authUser,
  };
}

export default connect(mapStateToProps)(QuestionPage);
