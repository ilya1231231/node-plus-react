import React from "react"
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import BrandBar from "../components/UI/BrandBar";
import DeviceList from "../components/UI/DeviceList";
import TypeBar from "../components/UI/TypeBar";
import { fetchBrands, fetchDevices } from "../http/deviceApi";
import {getTypes} from "../store/actions/typeActions";

const Shop = () => {
    const dispatch = useDispatch()
    //единожды фетчим все типы и кидаем в состояние
    useEffect(() => {
        getTypes(dispatch)
        fetchBrands().then(data => dispatch({type: 'SET_BRANDS', payload: data}))
        fetchDevices().then(data => dispatch({type: 'SET_DEVICES', payload: data}))
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