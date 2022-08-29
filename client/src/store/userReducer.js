const defaultState = {
    isAuth: false
}

const MAKE_AUTH = "MAKE_AUTH"

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "MAKE_AUTH":
            return {...state, isAuth : true}
        default:
            return state
    }
}