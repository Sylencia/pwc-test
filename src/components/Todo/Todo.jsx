import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getPriorityAsString } from '../../utils'
import styles from './Todo.module.scss'

export const Todo = ({ todo }) => {
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
      {todo.text}
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
}
