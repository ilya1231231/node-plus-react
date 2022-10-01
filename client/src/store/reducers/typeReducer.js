import {connect} from "react-redux";
import Admin from "../../pages/Admin";
import {SET_SELECT_TYPE, SET_TYPES} from "../actions/actionTypes";

const defaultState = {
    types : [],
    selectedType : {}
}

export const typeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SELECT_TYPE:
            return {...state, selectedType : action.payload}
        case SET_TYPES:
            return {...state, types : action.payload}
        default:
            return state
    }
}
//
const mapStateToProps = state => ({
    todos: state
})
//
// const mapDispatchToProps = dispatch => ({
//     todos: state
// })

export default connect(
    mapStateToProps,
)(Admin)