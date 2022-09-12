import React from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom" 
import { SHOP_ROUTE, LOGIN_ROUTE, ABOUT_ROUTE, ADMIN_ROUTE } from "../../utils/consts";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
    const isAuth = useSelector(state => state.authReducer.isAuth)
    const dispatch = useDispatch()
    const logout = () => {
      dispatch({type: 'MAKE_LOGOUT', payload: false})
      dispatch({type: 'SET_USER', payload: null})
    }
    
    return(
      // Сделать верстку адаптивной
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="shop">IShop</Navbar.Brand>
                <Nav className="align-items-center">
                    <Nav.Link>
                        <Link to={SHOP_ROUTE}>Devices</Link>
                    </Nav.Link>
                <Nav.Link>
                    <Link to={ABOUT_ROUTE}>About</Link>
                </Nav.Link>
                {isAuth 
                    ? 
                    <div className="d-flex align-items-center">
                        <div>
                            <Nav.Link>
                                <Link to={ADMIN_ROUTE}>
                                    <div>
                                      Админка
                                    </div>
                                </Link>
                            </Nav.Link>
                        </div>
                        <div>
                            <img 
                              onClick={() => logout()}
                              style={{marginLeft: "6px", borderRadius: "5px"}} 
                              className="img_unauth"
                              width="35px" 
                              height="35px"
                              src="https://png.pngtree.com/png-vector/20190417/ourlarge/pngtree-vector-logout-icon-png-image_947079.jpg"></img>
                        </div>
                    </div>
                    : 
                        <Nav.Link>
                            <Link to={LOGIN_ROUTE}>Auth</Link>
                        </Nav.Link>
                }
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar