const defaultState = {
    isAuth: false
}

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "MAKE_AUTH":
            return {...state, isAuth : true}
        case "MAKE_LOGOUT": {
            return {...state, isAuth : false}
        }
        default:
            return state
    }
}