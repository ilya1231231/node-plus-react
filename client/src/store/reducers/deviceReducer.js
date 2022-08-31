const defaultState = {
    devices : [
        {id: 1, name: 'Iphone'},
        {id: 2, name: 'Samsung Galaxy'},
        {id: 3, name: 'Ipad'},
        {id: 4, name: 'IdeaPad Gaming 3'},
    ],
    selectedDevice: {}
}

export const deviceReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SELECT_DEVICE":
            return {...state, selectedDevice : action.payload}
        default:
            return state
    }
}