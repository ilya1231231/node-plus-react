import React from "react";
import { Col, Card, Image } from "react-bootstrap";
import star from '../../assets/star.png';
import {useNavigate} from 'react-router-dom'
import { DEVICE_ROUTE } from "../../utils/consts";
            
const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} onClick={() => {navigate(DEVICE_ROUTE + '/' + device.id)}}>
            <Card 
                style={{cursor: "pointer", width: "120"}}>
                <Image 
                    width={120}
                    height={120}
                    src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="d-flex justify-content-between align-items-center mt-1">
                    <div className="text-secondary">Lenovo ...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating ?? '5'}</div>
                        <Image width={15} height={15} src={star}/>
                    </div>
                </div>
                <div>
                    {device.name}
                </div>
            </Card>
        </Col>
    )
}

export default DeviceItem;