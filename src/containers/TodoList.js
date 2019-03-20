import { connect } from 'react-redux'
import { setSortOrder, setShowCompleted } from '../actions'
import { TodoList } from '../components/TodoList'
import { getTotalTodos, getCompletedTodos, getFilteredTodos } from '../utils'

const mapStateToProps = state => ({
  todos: getFilteredTodos(
    state.todos,
    state.filters.sortOrder,
    state.filters.showCompleted
  ),
  totalTodoCount: getTotalTodos(state.todos),
  completedTodoCount: getCompletedTodos(state.todos),
  sortOrder: state.filters.sortOrder,
  showCompleted: state.filters.showCompleted,
})

const mapDispatchToProps = dispatch => ({
  setSortOrder: order => dispatch(setSortOrder(order)),
  setShowCompleted: show => dispatch(setShowCompleted(show)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
