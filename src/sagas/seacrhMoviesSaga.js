import { call, put, takeEvery } from 'redux-saga/effects';
import { SEARCH_MOVIES, SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_FAILED } from "../actions/actions";

import { push } from 'react-router-redux'
/*** Workers ***/
export function* worckerSearchMoviesAsync(actions) {
    try {
        const response = yield call(fetch, `https://api.themoviedb.org/3/search/movie?api_key=ac0110c82a217040d069d57945df275c&language=ru-Ru&query=${actions.payload}&page=1&include_adult=false            `, { method: 'GET' })
        const json = yield call([response, 'json'])
        yield put({ type: SEARCH_MOVIES_SUCCESS, payload: json });
        yield put(push("/search"));

    } catch (error) {
        yield put({ type: SEARCH_MOVIES_FAILED, payload: error });

    }
}

/*** Wacher ***/

export function* watchSearchMovies() {
    yield takeEvery(SEARCH_MOVIES, worckerSearchMoviesAsync);
}


