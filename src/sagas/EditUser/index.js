import { fork, takeEvery, call, put } from 'redux-saga/effects'
import {delay}  from 'redux-saga'

import {updateUser, handleUpdate} from '../../actions/actions'
import { updateUser as updateUserApi} from '../../api'


export default function * editUserSaga() {
  yield fork(userEditWatcher)
}

function * userEditWatcher() {
  yield takeEvery(handleUpdate, userEditWorker)
}

function * userEditWorker({ payload }) {
  const user = yield call(updateUserApi, payload);
  yield put(updateUser(user));
}

