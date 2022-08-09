const defaultState =
    [
        {id: 1, name: 'Холодильники'},
        {id: 2, name: 'Телефоны'}
    ]

export const typeDeviceReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}