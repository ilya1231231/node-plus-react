const defaultState = {
    types : [],
    selectedType : {}
}

export const typeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SELECT_TYPE":
            return {...state, selectedType : action.payload}
        case "SET_TYPES":
            return {...state, types : action.payload}
        default:
            return state
    }
}