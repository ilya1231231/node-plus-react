import {Dropdown} from "react-bootstrap";
import actions from "../../../../store/actions/actions";
import {useDispatch, useSelector} from "react-redux";


const SelectType = ({types}) => {
    const dispatch = useDispatch()
    const selectedType = useSelector(state => state.typeReducer.selectedType)
    const selectType = (type) => {
        dispatch(actions.typeActions.setSelectedType(type))
    }

    return(
        <Dropdown>
            <Dropdown.Toggle>
                {selectedType.name || 'Выберите тип'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {types.map((type) =>
                    <Dropdown.Item
                        onClick={() => {
                            selectType(type)
                        }}
                        key={type.id}
                    >
                        {type.name}
                    </Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default SelectType