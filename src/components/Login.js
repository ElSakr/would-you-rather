import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import { authUser } from "../store/authuser";

class Login extends Component {
  state = {
    errorHint: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const userID = this.userID.value;
    const { dispatch } = this.props;
    userID !== "" ?
      dispatch(authUser(userID)) :
      this.setState({ errorHint: "You must choose a username!" })
  };

  render() {
    const { userNames } = this.props;
    const { errorHint } = this.state;
    return Object.keys(userNames).length === 0 ?
      <h1>Loading...</h1>
      :
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col xs={12} md={4}>
          <Card bg="light" className="text-center">
            <Card.Header>Login</Card.Header>
            <Card.Body>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formGridState">
                  <Form.Label>Username</Form.Label>
                  {errorHint ? (
                    <p className="text-danger">{errorHint}</p>
                  ) : null}

                  <Form.Control as="select" ref={(id) => (this.userID = id)}>
                    <option value="">Select user</option>
                    {userNames.map((item) => (
                      <option value={item.value} key={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Button type="submit" variant="outline-dark">
                  Login
                  </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
  }
}

const mapStateToProps = ({ users }) =>
(
  {
    userNames: Object.keys(users).map((id) => ({
      value: id,
      label: users[id].name,
    })),
  }
)

export default connect(mapStateToProps)(Login);
