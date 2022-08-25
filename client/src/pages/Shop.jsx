import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import BrandBar from "../components/UI/BrandBar";
import DeviceList from "../components/UI/DeviceList";
import TypeBar from "../components/UI/TypeBar";

const Shop = () => {

    return(
        <Container> 
            <Row>
                <Col md={3}>
                    <TypeBar></TypeBar>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    )
}

export default Shop;