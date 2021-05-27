import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Tabs, Tab } from "react-bootstrap";
import QuestionsList from "./QuestionsList";
class Dashboard extends Component {
  state = {
    activeTab: "1",
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { answeredQuestionIds, unansweredQuestionIds } = this.props;

    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

function mapStateToProps({ authUser, questions, users }) {
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
