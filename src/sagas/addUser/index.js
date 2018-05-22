import { fork, takeEvery, call, put, select } from 'redux-saga/effects'

import { setUser, handleSubmit } from '../../actions/actions'
import { postUser } from '../../api'

export default function * addUserSaga() {
  yield fork(userAddWatcher)
}

function * userAddWatcher() {
  yield takeEvery(handleSubmit, userAddWorker)
}

function * userAddWorker({ payload }) {
  const {firstName, lastName, age,status, visits, progress} = payload
  const user = yield call(postUser, {
    firstName,
    lastName,
    age,
    visits,
    progress,
    status,
  });
  yield put(setUser(user));
}
