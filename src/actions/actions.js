

export const GET_TOP_RATE_MOVIES = 'GET_TOP_RATE_MOVIES'
export const GET_TOP_RATE_MOVIES_SUCCESS = 'GET_TOP_RATE_MOVIES_SUCCESS'
export const GET_TOP_RATE_MOVIES_FAILED = 'GET_TOP_RATE_MOVIES_FAILED'

export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES'
export const GET_POPULAR_MOVIES_SUCCESS = 'GET_POPULAR_MOVIES_SUCCESS'
export const GET_POPULAR_MOVIES_FAILED = 'GET_POPULAR_MOVIES_FAILED'



export const SEARCH_MOVIES = 'SEARCH_MOVIES'
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS'
export const SEARCH_MOVIES_FAILED = 'SEARCH_MOVIES_FAILED'




export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAILED = 'GET_USERS_FAILED'



export const IS_LOGGED_IN = 'IS_LOGGED_IN'





export function getTopRateMovies() {
    return {
        type: GET_TOP_RATE_MOVIES,
    }
} 

export function getPopularMovies() {
    return {
        type: GET_POPULAR_MOVIES,
    }
} 
export function searchMovies(serachInput) {
    return {
        type: SEARCH_MOVIES,
        payload:serachInput
    }
} 


export function getUsers() {
    return {
        type: GET_USERS,
    }
} 


export function isLoggedIn(isLoggedIn) {
    return {
        type: IS_LOGGED_IN,
        payload: isLoggedIn
    }
} 


