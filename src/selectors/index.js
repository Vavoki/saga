import { createSelector } from 'reselect'
import { prop} from 'ramda'

export const selectUserList = state => state.userList
export const createUserListSelector = createSelector.bind(null, selectUserList)

export const selectUsers = createUserListSelector(prop('users'))
