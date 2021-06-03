import React from "react";
import { connect } from "react-redux";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/helper";
import Avatar from "./Avatar";

class Question extends React.Component {
  render() {
    const { question, author } = this.props;
    const { optionOne, timestamp, id } = question;
    const { name, avatarURL } = author;
    if (!question || !author) return null;
    return (
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Card bg="light" className="m-3">
            <Card.Header>
              <Avatar avatarURL={avatarURL} className="mr-2" />
              {name} asks:
            </Card.Header>
            <Card.Body className="text-center">
              <Card.Text>{optionOne.text.slice(0, 50)}...?</Card.Text>
              <Link to={`/questions/${id}`}>
                <Button variant="outline-dark">View Question</Button>
              </Link>
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

function mapStateToProps({ questions, users }, { id }) {
  const question = questions ? questions[id] : 0;

  return {
    question: question ? question : 0,
    author: question ? users[question.author] : 0,
  };
}

export default connect(mapStateToProps)(Question);
