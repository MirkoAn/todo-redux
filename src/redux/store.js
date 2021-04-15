import { createStore, combineReducers } from 'redux'
import { todos, VisibilityFilter } from './reducers'

export default createStore(combineReducers({ todos, VisibilityFilter }),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())