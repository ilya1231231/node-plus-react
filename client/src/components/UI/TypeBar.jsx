import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';

const TypeBar = () => {
    const dispatch = useDispatch()
    const types =  useSelector(state => state.typeReducer.types)
    const selectedType = useSelector(state => state.typeReducer.selectedType)
    const selectType = (type) => {
		dispatch({type: "SELECT_TYPE", payload: type})
	}
    return(
        <ListGroup>
            {types.map(type => (
                <ListGroup.Item 
                    style={{cursor: 'pointer'}}
                    active={type.id === selectedType.id}
                    key={type.id}
                    onClick={() => selectType(type)}>
                    {type.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default TypeBar