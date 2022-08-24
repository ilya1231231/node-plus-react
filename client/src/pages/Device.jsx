import React from "react"
import {Col, Image, Row, Card, Button, Container} from 'react-bootstrap';
import bigStar from '../assets/bigStar.png';
import CarouselBox from "../components/UI/CarouselBox";

const Device = () => {
    const device = 
        {
            id: 2, 
            name: 'Samsung Galaxy', 
            img: 'https://cdn.svyaznoy.ru/upload/iblock/a05/samsung_pd_sm_g991_bzvgser_900x1200_1.jpg/resize/483x483/hq/',
            rating: 3,
            price: 50000
        };
    const descriptions = [
        {id: 1, title: 'Оперативная память', description: '6гб'},
        {id: 2, title: 'Вес', description: '200гр'},
        {id: 3, title: 'Экран', description: 'OLED'},
        {id: 4, title: 'Камера', description: '20 Мегапикселей'},
        {id: 5, title: 'Память', description: '124гб'},
    ]
    return(
        <Container>
            <div className="row d-flex align-items-center">
                <Col md={4} xs={12} className="d-flex justify-content-center align-items-center p-3">
                <CarouselBox props={device}/>
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
                    <Card 
                        className="d-flex flex-column justify-content-around align-items-center"
                        style={{width: 300, height: 300, border: '3px solid light'}}
                        >
                        <h3
                            style={{fontSize: 30}}
                            >От: {device.price} рублей</h3>
                        <Button
                            variant={"outline-dark"}
                            >Добавить в корзину
                        </Button>
                    </Card>
                </Col>
            </div>
            <Row className="p-3">
                <h1>Характеристики</h1>
                {descriptions.map((info, index) => 
                    <Col key={info.id} md={12} mt-3 style={{background: index % 2 ? 'lightgray' : 'transparent'}}>
                        <h5>{info.title} : {info.description}</h5>
                    </Col>
                )}
            </Row>
        </Container>
    )
}

export default Device;