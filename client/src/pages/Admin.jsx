import React from "react"
import TypeModal from "../components/UI/modals/TypeModal";
import { Container, Button} from "react-bootstrap";
import BrandModal from "../components/UI/modals/BrandModal";    
import DeviceModal from "../components/UI/modals/DeviceModal";
import {useDispatch} from 'react-redux';
import { useState, useEffect } from 'react';
import actions from "../store/actions/actions";

const Admin = () => {
    const dispatch = useDispatch()
	useEffect(() => {
        dispatch(actions.typeActions.setTypes)
        dispatch(actions.brandActions.setBrands)
    }, [dispatch])

    const [showTypeModalVisible, setShowTypeModalVisible] = useState(false);
    const [showBrandModalVisible, setShowBrandModalVisible] = useState(false);
    const [showDeviceModalVisible, setShowDeviceModalVisible] = useState(false);
    return(
        <Container className='d-flex flex-column'>
            <Button 
                variant={"outline-dark"} 
                className="mt-2" 
                onClick={() => setShowTypeModalVisible(true)}
            >
                Добавить тип
            </Button>
            <Button 
                variant={"outline-dark"} 
                className="mt-2"
                onClick={() => setShowBrandModalVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button 
                variant={"outline-dark"} 
                className="mt-2"
                onClick={() => setShowDeviceModalVisible(true)}
            >
                Добавить устройство
            </Button>
            <TypeModal show={showTypeModalVisible} onHide={() => setShowTypeModalVisible(false)}/>
            <BrandModal show={showBrandModalVisible} onHide={() => setShowBrandModalVisible(false)}/>
            <DeviceModal show={showDeviceModalVisible} onHide={() => setShowDeviceModalVisible(false)}/>
        </Container>
    )
}

export default Admin;