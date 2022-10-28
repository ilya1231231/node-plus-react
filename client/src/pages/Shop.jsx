import React from "react"
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import BrandBar from "../components/UI/BrandBar";
import DeviceList from "../components/UI/DeviceList";
import TypeBar from "../components/UI/TypeBar";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceApi";
import actions from "../store/actions/actions";

const Shop = () => {
    const dispatch = useDispatch()
    //единожды фетчим все типы и кидаем в состояние
    useEffect(() => {
        dispatch(actions.typeActions.setTypes)
        fetchBrands().then(data => dispatch(actions.brandActions.setBrands(data)))
        fetchDevices().then(data => dispatch(actions.deviceActions.setDevices(data)))
    }, [dispatch])
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