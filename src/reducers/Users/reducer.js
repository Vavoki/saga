import { handleActions } from 'redux-actions'
import * as actions from '../../actions/actions'

const initialState = {
    users: [  {
      id: 0,
      firstName: "suit",
      lastName: "meeting",
      age: 25,
      visits: 71,
      progress: 28,
      status: "complicated"
    }],
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
