import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Row, Col } from "react-bootstrap";
import AvatarPlaceholder from "./Avatar";

class User extends Component {
  render() {
    const { user } = this.props;
    const { name, avatarURL, answers, questions } = user;

    return (
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Card bg="light" className="m-3">
            <Card.Header>
              <AvatarPlaceholder avatarURL={avatarURL} className="mr-2" />
              {name}
            </Card.Header>
            <Card.Body className="d-flex justify-content-center">
              <Card.Text>
                Answered Questions: {Object.keys(answers).length}
                <br />
                Created Questions: {questions.length}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              Score: {Object.keys(answers).length + questions.length}
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id],
  };
}

export default connect(mapStateToProps)(User);
