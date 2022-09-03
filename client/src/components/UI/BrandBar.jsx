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
        <div className="d-flex">
            {brands.map(brand => 
                <div key={brand.id}className="p-3">{brand.name}</div>
            )}
        </div>
    )
}

export default BrandBar