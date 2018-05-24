import { handleActions } from 'redux-actions'
import * as actions from '../../actions/actions'
import {toggleModal} from "../../actions/actions";

const initialState = {
    users: [],
    show: false,
    onLoad: false,
    activeUser: {},
}

const reducer = handleActions({
    [actions.setUsers]: (state, action) => ({
        ...state, users: action.payload, onLoad: false
    }),

    [actions.updateUser]: (state, { payload }) => {
      const newState = state.users;
      for(let i=0; i<newState.length; i++) {
        if (newState[i].id === payload.id) {
          newState[i] = payload;
        }
      }
      return{
        ...state,
        users: newState,
    }},
    [actions.deleteUser]: (state, {payload: id }) => ({
      ...state,
        users: state.users.filter(user => user.id !== id)
    }),
    [toggleModal]: (state) => ({
    ...state, show: !state.show
    }),
   [actions.setUser] : (state, { payload } ) => ({
     ...state,
     users: state.users.concat(payload)
   }),
    [actions.getUsers]: (state) => ({
      ...state,
      onLoad: true
    }),

  [actions.giveUser]: (state,  action ) => ({
    ...state, activeUser: action.payload[0]
  }),
}, initialState)

export default reducer
