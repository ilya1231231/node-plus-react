import React from "react"
import { useEffect, useState } from "react";
import {Col, Row, Button, Container} from 'react-bootstrap';
import bigStar from '../assets/bigStar.png';
import CarouselBox from "../components/UI/CarouselBox";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceApi";

const Device = () => {
    const [device, setDevice] = useState({info: []})
    //параметры из ссылки
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])
    return(
        <Container>
            <div className="row d-flex align-items-center">
                <Col md={4} xs={12} className="d-flex justify-content-center align-items-center p-3">
                <CarouselBox device={device}/>
                </Col>
                <Col md={4} xs={12}>
                    <div className="d-flex flex-column justify-content-center align-items-center p-3">
                        <div>
                            <h2>{device.name}</h2>
                        </div>
                        <div
                            className="d-flex align-items-center justify-content-center p-3"   
                            style={{
                                background: `url(${bigStar}) no-repeat center center`,
                                width: 240,
                                height: 240,
                                backgroundSize: 'cover',
                                fontSize: 54
                            }} 
                        >
                            {device.rating}
                        </div>
                    </div>
                </Col>
                <Col md={4} xs={12}>
                    <div className="d-flex justify-content-center align-items-center">
                        <div 
                            className="d-flex flex-column justify-content-around align-items-center"
                            style={{width: 300, height: 300, border: '3px solid lightgray', borderRadius: '5px'}}
                            >
                            <h3
                                style={{fontSize: 30}}
                                >От: {device.price} рублей</h3>
                            <Button
                                variant={"outline-dark"}
                                >Добавить в корзину
                            </Button>
                        </div>
                    </div>
                </Col>
            </div>
            <Row className="p-3">
                <h1>Характеристики</h1>
                {device.info.map((info, index) =>
                    <Col key={info.id} md={12} mt-3 style={{background: index % 2 ? 'lightgray' : 'transparent'}}>
                        <h5>{info.title} : {info.description}</h5>
                    </Col>
                )}
            </Row>
        </Container>
    )
}

export default Device;