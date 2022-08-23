import React from "react"
import { Container } from "react-bootstrap";
import {Col, Image, Row} from 'react-bootstrap';
import bigStar from '../assets/bigStar.png';

const Device = () => {
    const device = 
        {
            id: 2, 
            name: 'Samsung Galaxy', 
            img: 'https://cdn.svyaznoy.ru/upload/iblock/a05/samsung_pd_sm_g991_bzvgser_900x1200_1.jpg/resize/483x483/hq/',
            rating: 3
        };
    return(
        <Container>
            <div className="d-flex">
                <Col md={4} className="justify-content-center">
                    <Image width="auto" height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <h2>{device.name}</h2>
                        </div>
                        <div
                            className="d-flex align-items-center justify-content-center"   
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
                    </Row>
                </Col>
                <Col md={4}>
                    Добавить в корзину
                </Col>
            </div>
        </Container>
    )
}

export default Device;