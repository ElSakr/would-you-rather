import React from "react";
import { connect } from "react-redux";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/helper";
import AvatarPlaceholder from "./Avatar";

const Question = ({ question, author }) => {
  const { optionOne, timestamp, id } = question;
  const { name, avatarURL } = author;
  if (!question || !author) return null;

  return (
    <Row className="justify-content-center">
      <Col xs={12} md={6}>
        <Card bg="light" className="m-3">
          <Card.Header>
            <AvatarPlaceholder avatarURL={avatarURL} className="mr-2" />
            {name} is asks:
            </Card.Header>
          <Card.Body className="text-center">
            <Card.Text>{optionOne.text.slice(0, 40)}..?</Card.Text>
            <Link to={`/questions/${id}`}>
              <Button variant="outline-dark">View</Button>
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

function mapStateToProps({ questions, users }, { id }) {
  const question = questions ? questions[id] : 0;
  return {
    question: question ? question : 0,
    author: question ? users[question.author] : 0,
  };
}

export default connect(mapStateToProps)(Question);
