import React from "react"
import { useState } from "react";
import TypeModal from "../components/UI/modals/TypeModal";
import { Container, Button} from "react-bootstrap";

const Admin = () => {
    const [showTypeModalVisible, setShowTypeModalVisible] = useState(false);
    // const [showBrandModalVisible, setShowBrandModalVisible] = useState(false);
    // const [showDeviceModalVisible, setShowDeviceModalVisible] = useState(false);
    return(
        <Container className="d-flex flex-column">
            <Button 
                variant={"outline-dark"} 
                className="mt-2" 
                onClick={() => setShowTypeModalVisible(true)}
            >
                Добавить тип
            </Button>
            <Button variant={"outline-dark"} className="mt-2">Добавить бренд</Button>
            <Button variant={"outline-dark"} className="mt-2">Добавить устройство</Button>
            <TypeModal show={showTypeModalVisible} onHide={() => setShowTypeModalVisible(false)}/>
        </Container>
    )
}

export default Admin;