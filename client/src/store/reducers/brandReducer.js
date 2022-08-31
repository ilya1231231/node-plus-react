const defaultState = {
    brands : [
        {id: 1, name: 'Apple'},
        {id: 2, name: 'Samsung'},
        {id: 3, name: 'LG'},
        {id: 4, name: 'Lenovo'},
        {id: 5, name: 'DEXP'},
        {id: 6, name: 'ACER'},
        {id: 7, name: 'Sony'},
        {id: 8, name: 'Microsoft'},
    ],
    selectedBrand: {}
}

export const brandReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SELECT_BRAND":
            return {...state, selectedBrand : action.payload}
        default:
            return state
    }
}