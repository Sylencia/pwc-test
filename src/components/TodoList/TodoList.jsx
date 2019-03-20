import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Todo } from '../Todo'
import { getFilteredTodos, getTotalTodos, getCompletedTodos } from '../../utils'
import styles from './TodoList.module.scss'

export const TodoList = ({
  todos,
  deleteTodo,
  completeTodo,
  sortOrder,
  showCompleted,
}) => {
  const filteredTodos = getFilteredTodos(todos, sortOrder, showCompleted)
  const totalTodoCount = getTotalTodos(todos)
  const completedTodoCount = getCompletedTodos(todos)

  return (
    <Fragment>
      <h4 className={styles.heading}>Todo list</h4>
      {filteredTodos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      ))}
      <p>
        Completed todos: {completedTodoCount} / Total todos: {totalTodoCount}
      </p>
    </Fragment>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  sortOrder: PropTypes.string.isRequired,
  showCompleted: PropTypes.bool.isRequired,
}
