import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { handleAddQuestion } from "../store/shared";

const NewQuestion = () => {
  const [optionOne, setOptionOne] = useState('')
  const [optionTwo, setOptionTwo] = useState('')
  const [goToHome, setGoToHome] = useState(false)
  const dispatch = useDispatch()

  const OnInputChange = (event, setOption) => {
    setOption(event.target.value)
  };

  const OnSubmit = (event) => {
    event.preventDefault();
    setOptionOne('')
    setOptionTwo('')
    setGoToHome(true)
    setTimeout(() => {
      dispatch(handleAddQuestion(optionOne, optionTwo))
    }, 2000);
  };

  return (
    (goToHome === true) ? <Redirect to="/" /> :
      <>
        <h2 className="text-center my-3">Would You Rather?</h2>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Card bg="light" className="m-3 text-center">
              <Card.Body>
                <Form onSubmit={OnSubmit}>
                  <Form.Group controlId="optionOne">
                    <Form.Label>Choice One</Form.Label>
                    <Form.Control
                      type="text"
                      name="optionOne"
                      value={optionOne}
                      onChange={(event) => OnInputChange(event, setOptionOne)}
                    />
                  </Form.Group>
                  <h3>OR</h3>
                  <Form.Group controlId="optionTwo">
                    <Form.Label>Choice Two</Form.Label>
                    <Form.Control
                      type="text"
                      name="optionTwo"
                      value={optionTwo}
                      onChange={(event) => OnInputChange(event, setOptionTwo)}
                    />
                  </Form.Group>
                  <Button
                    type="submit"
                    variant="outline-dark"
                    disabled={optionOne === "" || optionTwo === ""}
                  >
                    Add
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
  );
}

export default connect()(NewQuestion);
