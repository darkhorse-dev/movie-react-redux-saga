import { combineReducers } from "redux";

import moviesAppReducer from "./moviesAppReducer";
import searchMovieReducer from "./searchMovieReducer";
import usersReducer from "./usersReducer";
import { routerReducer } from 'react-router-redux'


const rootReducers = combineReducers({
    moviesAppReducer: moviesAppReducer,
    searchMovieReducer: searchMovieReducer,
    usersReducer: usersReducer,
    router: routerReducer
})

export default rootReducers;