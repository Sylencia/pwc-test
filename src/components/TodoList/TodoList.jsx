import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Todo } from '../Todo'
import { Filter } from '../Filter'

export const TodoList = ({ todos, totalTodoCount, completedTodoCount }) => (
  <Fragment>
    <Filter />
    {todos.map(todo => (
      <Todo key={todo.id} todo={todo} />
    ))}
    <p>
      Completed todos: {completedTodoCount} / Total todos: {totalTodoCount}
    </p>
  </Fragment>
)

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  totalTodoCount: PropTypes.number.isRequired,
  completedTodoCount: PropTypes.number.isRequired,
}
