import React, { Component, Fragment } from "react";
import Question from "./Question";
class QuestionsList extends Component {
  render() {
    const { idsList, emptyListNote } = this.props;

    return (
      <Fragment>
        <h2 className="text-center my-3">
          <small>Would You Rather...</small>
        </h2>
        {idsList && idsList.length ? (
          idsList.map((id) => <Question key={id} id={id} />)
        ) : (
          <p className="text-center">{emptyListNote}</p>
        )}
      </Fragment>
    );
  }
}

export default QuestionsList;
