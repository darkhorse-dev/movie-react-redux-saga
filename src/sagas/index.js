import { all } from "redux-saga/effects";
import { watchGetTopRateMovies } from "./getTopRateMoviesSaga";
import { watchGetPopularMovies } from "./getPopularMoviesSaga";
import { watchSearchMovies } from "./seacrhMoviesSaga";
import { watchGetUsers } from "./getUsersSaga";

export default function* rootSaga() {
    yield all([watchGetTopRateMovies(), watchGetPopularMovies(), watchSearchMovies(), watchGetUsers()]);
}
