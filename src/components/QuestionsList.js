import React from "react";
import Question from "./Question";
const QuestionsList = (props) => {
  const { idsList, emptyMsg } = props;

  return (
    <>
      <h2 className="text-center my-3">
        <span>Would You Rather? </span>
      </h2>
      {idsList && idsList.length ? (
        idsList.map((id) => <Question key={id} id={id} />)
      ) : (
        <p className="text-center">{emptyMsg}</p>
      )}
    </>
  );
}

export default QuestionsList;
