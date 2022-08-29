import React from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom" 
import { SHOP_ROUTE, LOGIN_ROUTE, ABOUT_ROUTE, ADMIN_ROUTE } from "../../utils/consts";
import { useSelector } from "react-redux";

const NavBar = () => {
    const isAuth = useSelector(state => state.userReducer.isAuth)
    return(
      // Сделать верстку адаптивной
        <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="shop">IShop</Navbar.Brand>
          <Nav>
            <Nav.Link>
              <Link to={SHOP_ROUTE}>Devices</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={ABOUT_ROUTE}>About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={LOGIN_ROUTE}>Auth</Link>
            </Nav.Link>
            {isAuth ? 
              <Nav.Link>
                <Link to={ADMIN_ROUTE}>
                <div className="d-flex">
                  Админка
                  <img width="20px" height="20px"src="https://cdn-icons-png.flaticon.com/512/2942/2942813.png"></img>
                </div>
                </Link>
              </Nav.Link>
            : ''}
          </Nav>
        </Container>
        </Navbar>
    )
}

export default NavBar