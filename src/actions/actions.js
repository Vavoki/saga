import { createAction } from 'redux-actions'

export const getUsers = createAction('getUsers')
export const setUsers = createAction('setUsers')
export const updateUser = createAction('updateUser')
export const deleteUser = createAction('deleteUser')
export const toggleModal = createAction('toggleModal')
export const handleDelete = createAction('handleDelete')
export const setUser = createAction('setUser')


export const handleSubmit = createAction('handleSubmit')


export const findUser = id => ({
  type: 'findUser',
  payload: id
})
export const giveUser = createAction('giveUser')
