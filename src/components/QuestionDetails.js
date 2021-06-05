import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Row, Col, Button, Form } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { formatDate } from "../utils/helper";
import { handleAnswer } from "../store/shared";
import NotFound from "./NotFound";
import AvatarPlaceholder from "./Avatar";

class QuestionDetails extends Component {
  state = {
    errorHint: "",
  };
  handleSubmit = (id, e) => {
    const answer = this.form.answer.value;
    const { dispatch } = this.props;
    e.preventDefault();

    if (answer !== "") {
      dispatch(handleAnswer(id, answer));
    } else {
      this.setState({ errorHint: "You must make a choice!" });
    }
  };
  render() {
    const { question, author, authedUser, answered, authUser } = this.props;
    const { optionOne, optionTwo, timestamp, id } = question;
    const { name, avatarURL } = author;
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;
    const optionOnePercent = Math.round(
      (optionOne.votes.length / totalVotes) * 100
    );
    const optionTwoPercent = Math.round(
      (optionTwo.votes.length / totalVotes) * 100
    );
    const { errorHint } = this.state;

    if (question === null || authUser === null) {
      return <NotFound />;
    }

    if (answered) {
      return (
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Card bg="light" className="m-3">
              <Card.Header>
                <AvatarPlaceholder avatarURL={avatarURL} className="mr-2" />
                {name} asks:
              </Card.Header>

              <Card.Body className="d-flex justify-content-center">
                <ul>
                  <li>
                    {optionOne.text}
                    {optionOne.votes.includes(authedUser) ? (
                      <span className="text-danger ml-2">
                        &lt;- Your choice
                      </span>
                    ) : null}
                  </li>
                  <ProgressBar
                    now={optionOnePercent}
                    label={`${optionOnePercent}%`}
                    variant="info"
                  />
                  <Card.Text className="text-muted">
                    chosen by {optionOne.votes.length} out of {totalVotes} users
                  </Card.Text>
                  <li>
                    {optionTwo.text}
                    {optionTwo.votes.includes(authedUser) ? (
                      <span className="text-danger ml-2">
                        &lt;- Your choice
                      </span>
                    ) : null}
                  </li>
                  <ProgressBar
                    now={optionTwoPercent}
                    label={`${optionTwoPercent}%`}
                    variant="info"
                  />
                  <Card.Text className="text-muted">
                    chosen by {optionTwo.votes.length} out of {totalVotes} users
                  </Card.Text>
                </ul>
              </Card.Body>
              <Card.Footer>
                <span className="text-muted">{formatDate(timestamp)}</span>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      );
    } else {
      return (
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Card bg="light" className="m-3">
              <Card.Header>
                <AvatarPlaceholder avatarURL={avatarURL} className="mr-2" />
                {name} asks:
              </Card.Header>

              <Card.Body className="d-flex justify-content-center">
                <Form
                  onSubmit={(e) => this.handleSubmit(id, e)}
                  ref={(f) => (this.form = f)}
                >
                  {errorHint ? <p className="text-danger">{errorHint}</p> : null}
                  <Form.Check
                    custom
                    type="radio"
                    id="optionOne"
                    label={optionOne.text}
                    value="optionOne"
                    name="answer"
                    className="mb-2"
                  />
                  <Form.Check
                    custom
                    type="radio"
                    id="optionTwo"
                    label={optionTwo.text}
                    value="optionTwo"
                    name="answer"
                    className="mb-2"
                  />
                  <Button type="submit" variant="outline-dark">
                    Vote
                  </Button>
                </Form>
              </Card.Body>
              <Card.Footer>
                <span className="text-muted">{formatDate(timestamp)}</span>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      );
    }
  }
}

const mapStateToProps = ({ questions, users, authUser }, { id, answered }) => {
  const question = questions[id];
  return {
    question: question ? question : null,
    author: question ? users[question.author] : null,
    authUser,
    answered,
  };
}

export default connect(mapStateToProps)(QuestionDetails);
