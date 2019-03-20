import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './AddTodo.module.scss'

export const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState('')
  const [priority, setPriority] = useState(2)

  const onSubmit = e => {
    e.preventDefault()
    addTodo(todo, priority)
    setTodo('')
    setPriority(2)
  }

  return (
    <form
      // on submission, this will call the addTodo action and then clear the field
      onSubmit={onSubmit}
      className={styles.form}
    >
      <input
        value={todo}
        onChange={e => setTodo(e.target.value)}
        placeholder="New todo"
        name="todo"
      />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option value={1}>High</option>
        <option value={2}>Medium</option>
        <option value={3}>Low</option>
      </select>
      <button type="submit">Add Todo</button>
    </form>
  )
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}
