import { fork } from 'redux-saga/effects'


import userListSaga from './Users'
import userDeleteSaga from './User'
import userAddSaga from './addUser'
import userFind from  './findUser'
import userEdit from  './EditUser'


export default function * rootSaga() {
    yield fork(userListSaga)
    yield fork(userDeleteSaga)
    yield fork(userAddSaga)
    yield fork(userFind)
    yield fork(userEdit)

}
