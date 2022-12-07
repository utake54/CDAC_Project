import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from"../../images/logo.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { doLogOut, getCurrentUserDetail, isLoggedIn } from "../../auth";
import { NavItem, NavLink } from "react-bootstrap";

export default function NavBar() {
  const [login,setLogin]=useState(false);
  const [user,setUser]=useState(undefined);

  useEffect(()=>{
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetail());
  },[login])

  const logout=()=>{
      doLogOut(()=>{
        //logged out
        setLogin(false);
        
      })
  }

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="300"
              height="100"
              className="d-inline-block align-top"
              alt="LOGO"
            />
          </Navbar.Brand>

          <Container>
            <Nav className="me-auto">
              <Nav.Link  as={Link} to="/">{" "}<h5>Home</h5>{" "}</Nav.Link>
              <Nav.Link as={Link} to="/donationhome">{" "}<h5>Donation</h5>{" "}</Nav.Link>
              <Nav.Link as={Link} to="/ReliefHome">{" "}<h5>Relief Provider</h5>{" "}</Nav.Link>
              <Nav.Link as={Link}to="/">{" "}<h5>About Us </h5>{" "}</Nav.Link>
            </Nav>
          </Container>
          <Form className="d-flex">


            {
              login && (
               <>
                <Link to="/">
                <Button  variant="outline-success" onClick={logout} >
                  LogOut
                </Button>{" "}
                </Link>
                <NavItem>
                  <NavLink>
                    {user.username}
                  </NavLink>
                </NavItem>
               </>
                
              )
            }
          {
            !login && (
              <>
              <Link to="/LogIn">
            <Button  variant="outline-success">
              Log&nbsp;In
            </Button>{" "}
            </Link>
            &nbsp;&nbsp;
            <Link to="/RegistrationHome">
            <Button  variant="outline-success">
              Registraion
            </Button>
            </Link>
              </>
            )
          }
          </Form>
        </Container>
      </Navbar>
    </>
  );
}
