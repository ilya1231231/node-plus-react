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
        <Row className='d-flex flex-wrap'>
            {brands.map(brand => 
                <Card 
                    className="align-items-center brandCard"
                    key={brand.id}
                    border={(selectedBrand.id === brand.id) ? 'dark' : 'secondary'}
                    cursor="pointer" 
                    style={{ width: '8rem' }}
                    onClick={() => selectBrand(brand)}
                >
                    <Card.Body>
                        <Card.Title>{brand.name}</Card.Title>
                    </Card.Body>
              </Card>
            )}
        </Row>
    )
}

export default BrandBar