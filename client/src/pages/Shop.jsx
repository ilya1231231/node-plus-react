import React from "react"
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import BrandBar from "../components/UI/BrandBar";
import DeviceList from "../components/UI/DeviceList";
import TypeBar from "../components/UI/TypeBar";
import actions from "../store/actions/actions";
import {useParams, useSearchParams} from "react-router-dom";
import {isEmpty} from "lodash";

const Shop = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const typeQuery = searchParams.get('type') || '';
    const brandQuery = searchParams.get('brand') || '';
    const selectedBrand = useSelector(state => state.brandReducer.selectedBrand)
    const selectedType = useSelector(state => state.typeReducer.selectedType);
    const dispatch = useDispatch()
    useEffect(() => {
        let params = {}
        dispatch(actions.typeActions.setTypes)
        dispatch(actions.brandActions.setBrands)
        if (!isEmpty(selectedBrand)) {
            params.brand = selectedBrand.id
        }
        if (!isEmpty(selectedType)) {
            params.type = selectedType.id
        }
        console.log(params)
        setSearchParams(params)
        dispatch(actions.deviceActions.setDevices(typeQuery, brandQuery))
    }, [dispatch, selectedBrand, selectedType])
    return(
        <Container> 
            <Row>
                <Col md={3} xs={12}>
                    <TypeBar/>
                </Col>
                <Col md={9} xs={12}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    )
}

export default Shop;