import { call, put, takeEvery} from 'redux-saga/effects';
import { GET_TOP_RATE_MOVIES, GET_TOP_RATE_MOVIES_SUCCESS, GET_TOP_RATE_MOVIES_FAILED } from "../actions/actions";


/*** Workers ***/
export function* worckerGetTopRateMoviesAsync() {
    try {
        const response = yield call(fetch, "https://api.themoviedb.org/3/movie/top_rated?api_key=ac0110c82a217040d069d57945df275c&language=ru-RU&page=1", { method: 'GET' })
        const json = yield call([response, 'json']) 
        yield put({ type: GET_TOP_RATE_MOVIES_SUCCESS, payload: json});
        
    } catch (error) {
        yield put({ type: GET_TOP_RATE_MOVIES_FAILED, payload: error});

    }
}

/*** Wacher ***/

export function* watchGetTopRateMovies() {
    yield takeEvery(GET_TOP_RATE_MOVIES, worckerGetTopRateMoviesAsync);
}


