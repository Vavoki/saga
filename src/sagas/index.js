import { fork } from 'redux-saga/effects'


import userListSaga from './Users'
import userDeleteSaga from './User'
import userAddSaga from './addUser'
import  userFind from  './findUser'


export default function * rootSaga() {
    yield fork(userListSaga)
    yield fork(userDeleteSaga)
    yield fork(userAddSaga)
    yield fork(userFind)

}
