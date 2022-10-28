import {useDispatch, useSelector} from "react-redux";
import {Alert, Button, Col, Row, Toast, ToastContainer} from "react-bootstrap";
import actions from "../../../store/actions/actions";
import {useState} from "react";

export const Success = () => {
    const success = useSelector(state => state.successReducer.success)
    const message = useSelector(state => state.successReducer.message)
    const dispatch = useDispatch()
    return (
        <ToastContainer className="p-3 mt-3" position={'top-center'} style={{zIndex: 9999}}>
            <Toast
                className='bg-success text-white border border-dark rounded'
                onClose={() => dispatch(actions.successActions.setSuccess(false))}
                show={success}
                delay={4000}
                autohide
            >
                <Toast.Body variant={"outline-dark"} className="text-center">{message}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}