import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getPriorityAsString } from '../../utils'
import styles from './Todo.module.scss'

export const Todo = ({ todo, completeTodo, deleteTodo }) => {
  const priority = getPriorityAsString(todo.priority)
  return (
    <div className={styles.todoContainer}>
      <div
        className={cx(styles.dot, {
          [styles.highPriority]: priority === 'high',
          [styles.mediumPriority]: priority === 'medium',
          [styles.lowPriority]: priority === 'low',
        })}
      />
      <div className={styles.textContainer}>
        <div className={styles.text}>
          <div>{todo.text}</div>
          {/* Only show the tick for completed tasks */}
          {todo.isCompleted && <div className={styles.tick}>✔</div>}
        </div>
        <div className={styles.options}>
          {/* Only show the complete button for uncompleted tasks */}
          {!todo.isCompleted && (
            <button
              className={styles.textButton}
              onClick={() => completeTodo(todo.id)}
            >
              Complete
            </button>
          )}
          <button
            className={styles.textButton}
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    priority: PropTypes.number,
    isCompleted: PropTypes.bool,
  }).isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}
