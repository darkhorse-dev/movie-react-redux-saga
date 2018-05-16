import { call,put, takeEvery } from 'redux-saga/effects';
import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAILED } from "../actions/actions";
import { reduxSagaFirebase } from "../firebase/firebase";

/*** Workers ***/
export function* workerGetUsersAsync() {
    try {
        const usersRef = yield call(reduxSagaFirebase.database.read, 'users');
        yield put({ type: GET_USERS_SUCCESS, payload: usersRef });
    } catch (error) {
        yield put({ type: GET_USERS_FAILED, payload: error });

    }
}

/*** Wacher ***/

export function* watchGetUsers() {
    yield takeEvery(GET_USERS, workerGetUsersAsync);
}


