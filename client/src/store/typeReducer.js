const defaultState = {
    types : [
        {id: 1, name: 'Холодильники'},
        {id: 2, name: 'Смартфоны'},
        {id: 3, name: 'Ноутбуки'},
        {id: 4, name: 'Бытовая техника'},
    ],
    selectedType : {}
}

export const typeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SELECT_TYPE":
            return {...state, selectedType : action.payload}
        default:
            return state
    }
}