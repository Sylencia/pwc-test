import React, { Fragment, useState } from 'react'
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
    <Fragment>
      <h4 className={styles.heading}>Add new todo</h4>
      <form
        // on submission, this will call the addTodo action and then clear the field
        onSubmit={onSubmit}
        className={styles.form}
      >
        <div className={styles.input}>
          <div>
            <span>Todo name: </span>
            <input
              value={todo}
              onChange={e => setTodo(e.target.value)}
              placeholder="New todo"
              name="todo"
            />
          </div>
          <div>
            <span>Priority: </span>
            <select
              value={priority}
              onChange={e => setPriority(e.target.value)}
            >
              <option value={1}>High</option>
              <option value={2}>Medium</option>
              <option value={3}>Low</option>
            </select>
          </div>
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </Fragment>
  )
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}
