import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Todo } from '../Todo'
import { Filter } from '../Filter'

export const TodoList = ({
  todos,
  totalTodoCount,
  completedTodoCount,
  sortOrder,
  showCompleted,
  setSortOrder,
  setShowCompleted,
}) => (
  <Fragment>
    <Filter
      sortOrder={sortOrder}
      showCompleted={showCompleted}
      setSortOrder={setSortOrder}
      setShowCompleted={setShowCompleted}
    />
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
  sortOrder: PropTypes.string.isRequired,
  showCompleted: PropTypes.bool.isRequired,
  setSortOrder: PropTypes.func.isRequired,
  setShowCompleted: PropTypes.func.isRequired,
}
