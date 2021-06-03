import React from "react";
import { connect } from "react-redux";
import { Tabs, Tab } from "react-bootstrap";
import QuestionsList from "./QuestionsList";

const Dashboard = (props) => {
  const { answeredQuestionIds, unansweredQuestionIds } = props;

  return (
    <>
      <Tabs>
        <Tab eventKey="unanswered" title="Unanswered Questions">
          <QuestionsList
            idsList={unansweredQuestionIds}
            emptyListNote="No more Unswered Questions!"
          />
        </Tab>
        <Tab eventKey="answered" title="Answered Questions">
          <QuestionsList
            idsList={answeredQuestionIds}
            emptyListNote="No Answered Questions yet"
          />
        </Tab>
      </Tabs>
    </>
  );
}

const mapStateToProps = ({ authUser, questions, users }) => {
  const user = users[authUser];

  const answeredQuestions = Object.keys(user.answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  return {
    unansweredQuestionIds: Object.keys(questions)
      .filter((qid) => !answeredQuestions.includes(qid))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    answeredQuestionIds: answeredQuestions,
  };
}

export default connect(mapStateToProps)(Dashboard);
