import React from "react";
import { connect } from "react-redux";
import UserStats from "./User";

const LeaderBoard = (props) => {
  const { userIDs } = props
  return (
    <>
      <h2 className="text-center my-3">
        <span>LeaderBoard</span>
      </h2>
      {userIDs.map((id) => (
        <UserStats key={id} id={id} />
      ))}
    </>
  );
}

const mapStateToProps = ({ users }) => {
  const sortedIDs = Object.keys(users).sort((id_1, id_2) => {
    const score_1 =
      Object.keys(users[id_1].answers).length + users[id_1].questions.length;
    const score_2 =
      Object.keys(users[id_2].answers).length + users[id_2].questions.length;

    return score_2 - score_1;
  });

  return {
    userIDs: sortedIDs,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
