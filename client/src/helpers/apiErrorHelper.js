import actions from "../store/actions/actions";

export const errorHandler = (error, dispatch) => {
    if (error) {
        dispatch(actions.errorActions.setError(error.response.data.message ?? 'Ошибка. Обратитесь в разработчику приложения'))
    }
}