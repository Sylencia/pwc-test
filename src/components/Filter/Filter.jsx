import React, { Fragment } from 'react'

export const Filter = () => {
  return (
    <Fragment>
      <span>Sort by: </span>
      <select>
        <option value="name">Name</option>
        <option value="priority">Priority</option>
      </select>
      <input type="checkbox" id="showCompleted" name="showCompleted" />
      <label htmlFor="showCompleted">Show completed</label>
    </Fragment>
  )
}
