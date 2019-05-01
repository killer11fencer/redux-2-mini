import {createStore, applyMiddleware} from 'redux'
import promiseMiddleWare from 'redux-promise-middleware'
import hackerNewsReducer from './hackerNewsReducer'


export default createStore(hackerNewsReducer,applyMiddleware(promiseMiddleWare));