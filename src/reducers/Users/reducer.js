import { handleActions } from 'redux-actions'
import * as actions from '../../actions/actions'

const initialState = {
    users: [],
}

const reducer = handleActions({
    [actions.setUsers]: (state, action) => ({
        ...state, users: action.payload
    }),

    [actions.updateUser]: (state, { payload: updateUser }) => ({
        ...state,
        users: state.users.map(user => user.id === updateUser.id ? updateUser : user)
    })
}, initialState)

export default reducer
