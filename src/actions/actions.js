import { ActionTypes } from '.'

export const addTodo = (text, priority) => ({
  type: ActionTypes.ADD_TODO,
  text,
  priority,
})
