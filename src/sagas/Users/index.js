import { fork, takeEvery, call, put } from 'redux-saga/effects'

import { getUsers as getUsrs, setUsers } from '../../actions/actions'
import { getUsers } from '../../api'
import {delay}  from 'redux-saga'

export default function * userListSaga() {
    yield fork(getUsersWatcher)
}

function * getUsersWatcher() {
    yield takeEvery(getUsrs, getUsersWorker)
}

function * getUsersWorker() {
    const users = yield call(getUsers)
    yield delay(1000)
    yield put(setUsers(users))
}
