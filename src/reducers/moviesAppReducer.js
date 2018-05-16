import {
  GET_POPULAR_MOVIES_SUCCESS,
  GET_POPULAR_MOVIES_FAILED,
  GET_TOP_RATE_MOVIES_SUCCESS,
  GET_TOP_RATE_MOVIES_FAILED,
} from "../actions/actions";

const initialState = {
  movies_top_rate: [],
  movies_popular: [],
  error: "",
};

function moviesAppReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOP_RATE_MOVIES_SUCCESS:
          return { ...state, movies_top_rate: action.payload };
    case GET_TOP_RATE_MOVIES_FAILED:
      return { ...state, error: action.payload };
    case GET_POPULAR_MOVIES_SUCCESS:
      return { ...state, movies_popular:action.payload };
    case GET_POPULAR_MOVIES_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default moviesAppReducer;
