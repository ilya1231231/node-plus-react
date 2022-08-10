import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom" 
import { SHOP_ROUTE, LOGIN_ROUTE, ABOUT_ROUTE } from "../utils/consts";

const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">IShop</Navbar.Brand>
          <Nav className="navbar__links">
            <button>
              <Link to={SHOP_ROUTE}>Devices</Link>
            </button>
            <button>
              <Link to={ABOUT_ROUTE}>About</Link>
            </button>
            <button>
              <Link to={LOGIN_ROUTE}>Auth</Link>
            </button>
          </Nav>
        </Container>
        </Navbar>
    )
}

export default NavBar