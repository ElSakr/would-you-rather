import React from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import AvatarPlaceholder from "./Avatar";

const NavBar = ({ user }) => {

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="my-3 border">
      <Navbar.Brand as={Link} to="/">
        Would you rather...?
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
            Leader board
            </Nav.Link>
        </Nav>
        <Nav className="align-items-start">
          <Navbar.Text>{user?.name}</Navbar.Text>
          <AvatarPlaceholder avatarURL={user?.avatarURL} className="mx-3" />
          <Nav.Link as={NavLink} to="/logout">
            Logout
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const mapStateToProps = ({ users, authUser }) => (
  {
    user: users[authUser],
  }
)

export default connect(mapStateToProps)(NavBar);
