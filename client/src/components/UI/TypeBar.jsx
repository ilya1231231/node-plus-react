import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import {useDispatch, useSelector} from 'react-redux';
import actions from "../../store/actions/actions";


const TypeBar = () => {
    const dispatch = useDispatch();
    const types = useSelector(state => state.typeReducer.types);
    const selectedType = useSelector(state => state.typeReducer.selectedType);
    const selectType = (type) => {
        dispatch(actions.typeActions.setSelectedType(type))
    }
    return (
        <ListGroup>
            {types.map(type => (
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    variant={type.id === selectedType.id ? 'secondary' : 'light'}
                    key={type.id}
                    onClick={() => selectType(type)}>
                    {type.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default TypeBar