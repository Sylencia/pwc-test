import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import styles from './Filter.module.scss'

export const Filter = ({
  sortOrder,
  showCompleted,
  setSortOrder,
  setShowCompleted,
}) => {
  return (
    <Fragment>
      <h4 className={styles.heading}>Filters</h4>
      <div className={styles.filter}>
        <div>
          <span>Sort by: </span>
          <select
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div>
          <input
            type="checkbox"
            id="showCompleted"
            name="showCompleted"
            checked={showCompleted}
            onChange={e => setShowCompleted(e.target.checked)}
          />
          <label htmlFor="showCompleted">Show completed</label>
        </div>
      </div>
    </Fragment>
  )
}

Filter.propTypes = {
  sortOrder: PropTypes.string.isRequired,
  showCompleted: PropTypes.bool.isRequired,
  setSortOrder: PropTypes.func.isRequired,
  setShowCompleted: PropTypes.func.isRequired,
}
