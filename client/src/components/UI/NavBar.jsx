import React from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom" 
import { SHOP_ROUTE, LOGIN_ROUTE, ABOUT_ROUTE } from "../../utils/consts";

const NavBar = () => {
    return(
      // Сделать верстку адаптивной
        <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
            <Row>
              <Col md={6}>
                <Navbar.Brand href="shop">IShop</Navbar.Brand>
              </Col>
              <Col md={6}>
              <Nav className="navbar__links">
                <Row>
                  <Col md={4}>
                    <button>
                      <Link to={SHOP_ROUTE}>Devices</Link>
                    </button>
                  </Col>
                  <Col>
                    <button>
                      <Link to={ABOUT_ROUTE}>About</Link>
                    </button>
                  </Col>
                  <Col>
                    <button>
                      <Link to={LOGIN_ROUTE}>Auth</Link>
                    </button>
                  </Col>
                </Row>
              </Nav>
              </Col>
            </Row>
        </Container>
        </Navbar>
    )
}

export default NavBar