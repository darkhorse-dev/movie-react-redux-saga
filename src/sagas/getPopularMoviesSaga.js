import { call, put, takeEvery} from 'redux-saga/effects';
import { GET_POPULAR_MOVIES, GET_POPULAR_MOVIES_SUCCESS,GET_POPULAR_MOVIES_FAILED } from "../actions/actions";


/*** Workers ***/
export function* worckerGetTopRateMoviesAsync() {
    try {
        const response = yield call(fetch, "https://api.themoviedb.org/3/discover/movie?api_key=ac0110c82a217040d069d57945df275c&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1", { method: 'GET' })
        const json = yield call([response, 'json']) 
        yield put({ type: GET_POPULAR_MOVIES_SUCCESS, payload: json});
        
    } catch (error) {
        yield put({ type: GET_POPULAR_MOVIES_FAILED, payload: error});

    }
}

/*** Wacher ***/

export function* watchGetPopularMovies() {
    yield takeEvery(GET_POPULAR_MOVIES, worckerGetTopRateMoviesAsync);
}


