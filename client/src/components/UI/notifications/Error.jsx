import {useDispatch, useSelector} from "react-redux";
import {Alert, Toast, ToastContainer} from "react-bootstrap";
import actions from "../../../store/actions/actions";

export const Error = () => {
    const error = useSelector(state => state.errorReducer.error)
    const dispatch = useDispatch()
    const closeAlert = () => {
        dispatch(actions.errorActions.setError(null))
    }
    return(
        <ToastContainer className="p-3 mt-3" position={'top-center'} style={{zIndex: 9999}}>
            <Toast
                className='bg-danger text-white border border-dark rounded'
                onClose={() => closeAlert()}
                show={!!error}
                delay={4000}
                autohide
            >
                <Toast.Body variant={"outline-dark"} className="text-center">{error}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}