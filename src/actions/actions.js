import { createAction } from 'redux-actions'

export const getUsers = createAction('getUsers')
export const setUsers = createAction('setUsers')
export const updateUser = createAction('updateUser')
export const deleteUser = createAction('deleteUser')
export const toggleModal = createAction('toggleModal')
export const setUser = createAction('setUser')
export const giveUser = createAction('giveUser')

export const handleDelete = createAction('handleDelete')
export const handleUpdate = createAction('handleUpdate')
export const handleSubmit = createAction('handleSubmit')


export const findUser = id => ({
  type: 'findUser',
  payload: id
})

