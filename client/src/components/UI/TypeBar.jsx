import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';

const TypeBar = () => {
    const types =  useSelector(state => state.typeReducer)
    console.log(types)
    return(
        <ListGroup>
            {types.map(type => (
                <ListGroup.Item>{type.name}</ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default TypeBar