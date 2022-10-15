import actions from "../store/actions/actions";

export const errorHandler = (error, dispatch) => {
    if (error.response.data.errors) {
        dispatch(actions.errorActions.setError(error.response.data.errors[0]))
    } else {
        const defaultError = {
            msg: error.message
        }
        dispatch(actions.errorActions.setError(defaultError))
    }
}