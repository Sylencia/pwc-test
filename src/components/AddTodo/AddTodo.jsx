import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState('')

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        addTodo(todo)
      }}
    >
      <input
        value={todo}
        onChange={e => setTodo(e.target.value)}
        placeholder="New todo"
        name="todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}
