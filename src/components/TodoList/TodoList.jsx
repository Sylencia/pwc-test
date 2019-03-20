import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Todo } from './Todo'

export const TodoList = ({ todos }) => (
  <Fragment>
    {todos.map(todo => (
      <Todo key={todo.id} todo={todo} />
    ))}
  </Fragment>
)

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
}
