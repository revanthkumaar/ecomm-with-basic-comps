import {createStore,applyMiddleWare} from 'redux';

import logger from 'redux-logger';

import rootReducer from './root-reducer';


const middlewares = [logger]

const store = createStore(rootReducer,applyMiddleWare(...middlewares));

export default store;