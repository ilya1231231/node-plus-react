import React from "react";
import {Col, Card, Image} from "react-bootstrap";
import star from '../../assets/star.png';
import {useNavigate} from 'react-router-dom'
import {DEVICE_ROUTE} from "../../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
        <Col className="d-flex mt-2 align-items-center justify-content-center" md={3} xs={6} onClick={() => {
            navigate(DEVICE_ROUTE + '/' + device.id)
        }}>
            <Card
                className='p-2 d-flex justify-content-center'
                style={{cursor: "pointer", width: 200, height: 200}}>
                <div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Image
                            style={{width: 100, height: 'auto'}}
                            src={process.env.REACT_APP_API_DEV_URL + '/' + device.img}/>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <div className="text-secondary">{device.brand ? device.brand.name : ''}</div>
                        <div className="d-flex align-items-center">
                            <div>{device.rating ?? '5'}</div>
                            <Image width={15} height={15} src={star}/>
                        </div>
                    </div>
                    <div>
                        <small>{device.name}</small>
                    </div>
                </div>
            </Card>
        </Col>
    )
}

export default DeviceItem;