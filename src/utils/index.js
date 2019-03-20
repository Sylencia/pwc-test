export const getPriorityAsString = priority =>
  ({
    1: 'high',
    2: 'medium',
    3: 'low',
  }[priority] || 'unknown')

export const getTotalTodos = todos => todos.length
export const getCompletedTodos = todos =>
  todos.filter(todo => todo.isCompleted).length
