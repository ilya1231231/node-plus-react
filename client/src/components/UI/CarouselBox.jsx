import Carousel from 'react-bootstrap/Carousel'

const CarouselBox = ({device}) => {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={process.env.REACT_APP_API_DEV_URL + '/' + device.img}
                    alt={device.name}
                />
                <Carousel.Caption
                    border='3px solid red'
                >
                    <h3>{device.name}</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={process.env.REACT_APP_API_DEV_URL + '/' + device.img}
                    alt={device.name}
                />
                <Carousel.Caption>
                    <h3>{device.name}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselBox;