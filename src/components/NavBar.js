import React, { Fragment } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Avatar from "./Avatar";

function NavBar(props) {
  const { user } = props;

  return (
    <Fragment>
      <Navbar expand="lg" bg="light" variant="light" className="my-3 border">
        <Navbar.Brand as={Link} to="/">
          <h2>
            <small>Would you rather...?</small>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/" exact>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/add">
              New Question
            </Nav.Link>
            <Nav.Link as={NavLink} to="/leaderboard">
              Leaderboard
            </Nav.Link>
          </Nav>
          <Nav className="align-items-start">
            <Navbar.Text>{user.name}</Navbar.Text>
            <Avatar avatarURL={user.avatarURL} className="mx-3" />
            <Nav.Link as={NavLink} to="/logout">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}

function mapStateToProps({ users, authUser }) {
  return {
    user: users[authUser],
  };
}

export default connect(mapStateToProps)(NavBar);
