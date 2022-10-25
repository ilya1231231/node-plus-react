import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import {SHOP_ROUTE, LOGIN_ROUTE, ABOUT_ROUTE, ADMIN_ROUTE} from "../../utils/consts";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../http/userApi";
import actions from "../../store/actions/actions";
import logoutImg from "../../assets/logout.jpg"

const NavBar = () => {
    const navigate = useNavigate()
    const isAuth = useSelector(state => state.authReducer.isAuth)
    const dispatch = useDispatch()
    const logoutClick = async () => {
        await logout()
        dispatch(actions.authActions.setLogout())
        dispatch(actions.authActions.setUser(null))
        navigate(SHOP_ROUTE)
    }
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand onClick={() => navigate(SHOP_ROUTE)}>IShop</Navbar.Brand>
                <Nav>
                    <Nav.Link onClick={() => navigate(SHOP_ROUTE)}>Devices</Nav.Link>
                    <Nav.Link onClick={() => navigate(ABOUT_ROUTE)}>About</Nav.Link>
                    {
                        isAuth
                            ?
                            <>
                                <Nav.Link onClick={() => navigate(ADMIN_ROUTE)}>
                                    Админка
                                </Nav.Link>
                                <Nav.Link onClick={() => logoutClick()}>
                                    <img
                                        alt=""
                                        style={{marginLeft: "3px", borderRadius: "5px"}}
                                        className="img_unauth"
                                        width="24px"
                                        height="24px"
                                        src={logoutImg}
                                    />
                                </Nav.Link>
                            </>
                            : <Nav.Link onClick={() => navigate(LOGIN_ROUTE)}>Auth</Nav.Link>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar