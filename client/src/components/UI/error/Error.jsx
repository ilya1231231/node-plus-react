import {useDispatch, useSelector} from "react-redux";
import {Alert} from "react-bootstrap";
import actions from "../../../store/actions/actions";

export const Error = () => {
    const error = useSelector(state => state.errorReducer.error)
    const dispatch = useDispatch()
    const closeAlert = () => {
        dispatch(actions.errorActions.setError(null))
    }
    if (error) {
        return(
            <Alert
                className='position-absolute'
                variant='danger' style={{zIndex: 9999}}
                onClose={() => closeAlert()} dismissible>
                <Alert.Heading>Ошибка</Alert.Heading>
                <p>{error.msg}</p>
            </Alert>
        )
    }
}