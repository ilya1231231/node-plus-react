import React from "react";
import { Row, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const BrandBar = () => {
    const dispatch = useDispatch()
    const brands = useSelector(state => state.brandReducer.brands)
    const selectedBrand = useSelector(state => state.brandReducer.selectedBrand)
    const selectBrand = (brand) => {
        dispatch({type: 'SELECT_BRAND', payload: brand})
    }
    
    return(
        <Row className='d-flex'>
            {brands.map(brand => 
                <Card 
                    className='m-3 align-items-center border border-3'
                    key={brand.id}
                    border={(selectedBrand.id === brand.id) ? 'dark' : 'secondary'}
                    cursor="pointer" 
                    style={{ width: '18rem' }}
                    onClick={() => selectBrand(brand)}>
                <Card.Img variant="top" src="https://mobile-review.com/articles/2021/image/armchair-analytics-243/1.jpg" />
                <Card.Body>
                  <Card.Title>{brand.name}</Card.Title>
                </Card.Body>
              </Card>
            )}
        </Row>
    )
}

export default BrandBar