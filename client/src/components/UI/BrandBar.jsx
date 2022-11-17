import React from "react";
import {useDispatch, useSelector} from "react-redux";
import actions from "../../store/actions/actions";
import {Button} from "react-bootstrap";

const BrandBar = () => {
    const dispatch = useDispatch()
    const brands = useSelector(state => state.brandReducer.brands)
    const selectedBrand = useSelector(state => state.brandReducer.selectedBrand)
    const selectBrand = (brand) => {
        brand.id === selectedBrand.id
            ? dispatch(actions.brandActions.setSelectedBrand({}))
            : dispatch(actions.brandActions.setSelectedBrand(brand))
    }
    return (
        <div className="d-flex flex-wrap align-items-center justify-content-around">
            {brands.map(brand =>
                <Button
                    className='mt-2 d-flex align-items-center'
                    size={'sm'}
                    variant={brand.id === selectedBrand.id ? 'secondary' : 'light'}
                    key={brand.id}
                    style={{cursor: 'pointer', border: '1px solid gray', borderRadius: 50}}
                    onClick={() => {
                        selectBrand(brand)
                    }}
                >
                    {brand.name}
                    {brand.id === selectedBrand.id
                        ?
                        <div>
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </div>
                        : ''}
                </Button>
            )}
        </div>
    )
}

export default BrandBar