import { fork } from 'redux-saga/effects'


import userListSaga from './Users'


export default function * rootSaga() {
    yield fork(userListSaga)

}
