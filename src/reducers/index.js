import { combineReducers } from 'redux'
import todos from './Todos'

const todoReducers = combineReducers({
  todos,
})

export default todoReducers
