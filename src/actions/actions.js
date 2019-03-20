import { ActionTypes } from '.'

export const addTodo = (text, priority) => ({
  type: ActionTypes.ADD_TODO,
  text,
  priority,
})

export const deleteTodo = id => ({
  type: ActionTypes.DELETE_TODO,
  id,
})

export const completeTodo = id => ({
  type: ActionTypes.COMPLETE_TODO,
  id,
})

export const setSortOrder = order => ({
  type: ActionTypes.SET_SORT_ORDER,
  order,
})

export const setShowCompleted = showCompleted => ({
  type: ActionTypes.SET_SHOW_COMPLETED,
  showCompleted,
})
