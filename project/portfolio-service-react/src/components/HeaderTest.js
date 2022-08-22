import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Navbar } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";

import "../App.css";

function HeaderTest() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Collapse in={open}>
        <div className="custom-navmenu" id="main-navbar">
          <Container className="py-md-4">
            <Row className="lign-items-start">
              <Col md={2}>
                <ul className="custom-menu">
                  <li className="active">
                    <Link to="#">Home</Link>
                  </li>
                  <li>
                    <Link to="#">About Me</Link>
                  </li>
                  <li>
                    <Link to="#">Services</Link>
                  </li>
                  <li>
                    <Link to="#">Works</Link>
                  </li>
                  <li>
                    <Link to="#">Contact</Link>
                  </li>
                </ul>
              </Col>
              <Col md={6} className="d-none d-md-block mr-auto">
                <div className="tweet d-flex">
                  <span className="bi bi-twitter text-white mt-2 mr-3"></span>
                  <div>
                    <p>
                      <em>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam necessitatibus incidunt ut officiis explicabo
                        inventore. <br />
                        <Link to="#">t.co/v82jsk</Link>
                      </em>
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={4} className="d-none d-md-block">
                <h3>Hire Me</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam necessitatibus incidunt ut officiisexplicabo
                  inventore. <br />
                  <Link to="#">myemail@gmail.com</Link>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </Collapse>
      <Navbar className={`custom-navbar `}>
        <Container>
          <Navbar.Brand href="#">MyPortfolio.</Navbar.Brand>

          <Link
            to="#"
            className={`burger ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderTest;
