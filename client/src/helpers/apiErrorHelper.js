import actions from "../store/actions/actions";

export const isErrorNotOccurred = (exeption, dispatch) => {
    if (exeption.code) {
        dispatch(actions.errorActions.setError(exeption.response.data.errors[0]))
        return false
    }
    return true
}