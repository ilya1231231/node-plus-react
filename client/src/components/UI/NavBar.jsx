import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap"
import { useNavigate } from "react-router-dom" 
import { SHOP_ROUTE, LOGIN_ROUTE, ABOUT_ROUTE, ADMIN_ROUTE } from "../../utils/consts";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
    const isAuth = useSelector(state => state.authReducer.isAuth)
    const dispatch = useDispatch()
    const logout = () => {
      dispatch({type: 'MAKE_LOGOUT', payload: false})
      dispatch({type: 'SET_USER', payload: null})
    }
    const navigate = useNavigate()
    return(
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand onClick={() =>navigate(SHOP_ROUTE)}>IShop</Navbar.Brand>
                <Nav>
                    <Nav.Link onClick={() =>navigate(SHOP_ROUTE)}>Devices</Nav.Link>
                    <Nav.Link onClick={() =>navigate(ABOUT_ROUTE)}>About</Nav.Link>
                {
                isAuth 
                    ? 
                    <>
                        <Nav.Link onClick={() =>navigate(ADMIN_ROUTE)}>
                            Админка
                        </Nav.Link>
                        <Nav.Link onClick={() => logout()}>
                            <img 
                                alt=""
                                style={{marginLeft: "3px", borderRadius: "5px"}} 
                                className="img_unauth"
                                width="24px" 
                                height="24px"
                                src="https://png.pngtree.com/png-vector/20190417/ourlarge/pngtree-vector-logout-icon-png-image_947079.jpg"
                            />
                        </Nav.Link>
                    </>
                    : <Nav.Link onClick={() =>navigate(LOGIN_ROUTE)}>Auth</Nav.Link>
                }
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar