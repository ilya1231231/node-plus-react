import React from "react";
import { Row, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const BrandBar = () => {
    const brands = useSelector(state => state.brandReducer.brands)
    console.log(brands)
    return(
        <Row className='d-flex'>
            {brands.map(brand => 
                <Card key={brand.id}>
                    {brand.name}
                </Card>
            )}
        </Row>
    )
}

export default BrandBar