import React from "react";
import {useDispatch, useSelector} from "react-redux";
import actions from "../../store/actions/actions";

const BrandBar = () => {
    const dispatch = useDispatch()
    const brands = useSelector(state => state.brandReducer.brands)
    const selectedBrand = useSelector(state => state.brandReducer.selectedBrand)
    const selectBrand = (brand) => {
        dispatch(actions.brandActions.setSelectedBrand(brand))
    }
    return (
        <div className="d-flex">
            {brands.map(brand =>
                <div key={brand.id} className="p-3">{brand.name}</div>
            )}
        </div>
    )
}

export default BrandBar