import {Dropdown} from "react-bootstrap";
import actions from "../../../../store/actions/actions";
import {useDispatch, useSelector} from "react-redux";


const SelectBrand = ({brands}) => {
    const dispatch = useDispatch()
    const selectedBrand = useSelector(state => state.brandReducer.selectedBrand)
    const selectBrand = (brand) => {
        dispatch(actions.brandActions.setSelectedBrand(brand))
    }

    return(
        <Dropdown>
            <Dropdown.Toggle>
                {selectedBrand.name || 'Выберите бренд'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {brands.map((brand) =>
                    <Dropdown.Item
                        onClick={() => {
                            selectBrand(brand)
                        }}
                        key={brand.id}
                    >
                        {brand.name}
                    </Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default SelectBrand