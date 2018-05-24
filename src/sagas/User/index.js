import { fork, takeEvery, call, put } from 'redux-saga/effects'

import { deleteUser, handleDelete } from '../../actions/actions'
import { deleteUser as deleteTodoApi } from '../../api'
import {delay}  from 'redux-saga'

export default function * DeleteSaga() {
  yield fork(userDeleteWatcher)
}

function * userDeleteWatcher() {
  yield takeEvery(handleDelete, userDeleteWorker)
}

function * userDeleteWorker({ payload: id }) {
  yield call(deleteTodoApi, id)
  yield delay(1000);
  yield put(deleteUser(id))

}
