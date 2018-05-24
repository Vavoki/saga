import { createSelector } from 'reselect'
import { prop, find,propEq} from 'ramda'

export const selectUserList = state => state.userList
export const createUserListSelector = createSelector.bind(null, selectUserList)
export const selectUsers = createUserListSelector(prop('users'))



export const selectTodoById = createSelector(
  [selectUsers, (_, id) => id],
  (users, userId) => find(propEq('id', userId))(users)
)
