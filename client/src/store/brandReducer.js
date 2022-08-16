const defaultState = {
    brands : [
        {id: 1, name: 'Apple'},
        {id: 2, name: 'Samsung'},
        {id: 3, name: 'LG'},
        {id: 4, name: 'Lenovo'},
    ],
}

export const brandReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}