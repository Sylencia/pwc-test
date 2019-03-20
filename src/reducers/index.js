import { combineReducers } from 'redux'
import todos from './Todos'
import filters from './Filters'

const rootReducer = combineReducers({
  todos,
  filters,
})

export default rootReducer
