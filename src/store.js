import {createStore, applyMiddleware,combineReducers} from 'redux'
import mediumReducer from './ducks/mediumReducer'
import promiseMiddleWare from 'redux-promise-middleware'
import hackerNewsReducer from './ducks/hackerNewsReducer'

const rootReducer = combineReducers({hackerNews:hackerNewsReducer,medium:mediumReducer})

export default createStore(rootReducer,applyMiddleware(promiseMiddleWare));