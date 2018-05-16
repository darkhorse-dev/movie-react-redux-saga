import {
    SEARCH_MOVIES_SUCCESS,
    SEARCH_MOVIES_FAILED,
} from "../actions/actions";

const initialState = {
  search_movies: [],
  error: "",
};

function searchMovieReducer(state = initialState, action) {
  switch (action.type) {
      case SEARCH_MOVIES_SUCCESS:
          return { ...state, search_movies: action.payload };
      case SEARCH_MOVIES_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default searchMovieReducer;

