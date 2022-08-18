import React from "react";
import { Col, Card, Image } from "react-bootstrap";
import star from '../../assets/star.png';
            
const DeviceItem = ({device}) => {
    return (
        <Col md={3}>
            <Card 
                style={{cursor: "pointer", width: "150"}}
                className="align-items-center"
                >
                
                <Image 
                    width={150} 
                    height={150} 
                    src="https://shop.lenovo.ru/upload/resize_cache/content_webp/47aab170-8c93-11eb-80e3-005056963b6e/1.webp"/>
                <div className="d-flex align-items-center">
                    <div>Lenovo ...</div>
                    <div>
                        <div>{device.rating ?? '5'}</div>
                        <Image src={star}/>
                    </div>
                </div>
            </Card>
        </Col>
    )
}

export default DeviceItem;