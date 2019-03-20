import { connect } from 'react-redux'
import { TodoList } from '../components/TodoList'
import { getTotalTodos, getCompletedTodos } from '../utils'

const mapStateToProps = state => ({
  todos: state.todos,
  totalTodoCount: getTotalTodos(state.todos),
  completedTodoCount: getCompletedTodos(state.todos),
})

export default connect(
  mapStateToProps,
  null
)(TodoList)
