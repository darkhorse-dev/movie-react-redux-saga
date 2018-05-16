import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import MovieApp from './components/MovieApp';

import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import rootReducers from "./reducers";

import { routerMiddleware  } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

import rootSaga from "./sagas/index";
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware();   

const history = createHistory()
const routerMiddleWare = routerMiddleware(history)

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleWare)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
         <MovieApp />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
