const defaultState =
    [
        {id: 1, name: 'Холодильники'},
        {id: 2, name: 'Телефоны'}
    ]

export const typeReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}