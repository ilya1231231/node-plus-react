import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

const CarouselBox = ({props}) => {

    return(
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src="https://avatars.mds.yandex.net/get-mpic/6277643/img_id5167684583275161810.jpeg/orig"
            alt={props.name}
          />
          <Carousel.Caption
            border='3px solid red'
            >
            <h3>{props.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://items.s1.citilink.ru/1652708_v01_b.jpg'
            alt={props.name}
          />
          <Carousel.Caption>
            <h3>{props.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default CarouselBox;