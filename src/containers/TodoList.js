import { connect } from 'react-redux'
import { deleteTodo, completeTodo } from '../actions'
import { TodoList } from '../components/TodoList'
import { getTotalTodos, getCompletedTodos } from '../utils'

const mapStateToProps = state => ({
  todos: state.todos,
  totalTodoCount: getTotalTodos(state.todos),
  completedTodoCount: getCompletedTodos(state.todos),
  sortOrder: state.filters.sortOrder,
  showCompleted: state.filters.showCompleted,
})

const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch(deleteTodo(id)),
  completeTodo: id => dispatch(completeTodo(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
