import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import TypeBar from "../components/UI/TypeBar";

const Shop = () => {

    return(
        <Container> 
            <Row className>
                <Col md={3}>
                    <TypeBar></TypeBar>
                </Col>
                <Col md={9}>
                </Col>
            </Row>
        </Container>
    )
}

export default Shop;