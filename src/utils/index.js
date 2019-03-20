// Ideally just use an enum
export const getPriorityAsString = priority =>
  ({
    1: 'high',
    2: 'medium',
    3: 'low',
  }[priority] || 'unknown')

export const getTotalTodos = todos => todos.length
export const getCompletedTodos = todos =>
  todos.filter(todo => todo.isCompleted).length

// This would be better served as a selector
// Served as a util function due to lack of time
const sortTodosByPriority = (a, b) => {
  return a.priority - b.priority
}

const sortTodosByText = (a, b) => {
  const aText = a.text.toUpperCase()
  const bText = b.text.toUpperCase()

  if (aText < bText) {
    return -1
  }

  if (aText > bText) {
    return 1
  }

  return 0
}

export const getFilteredTodos = (todos, sortOrder, showCompleted) => {
  const filteredTodos = showCompleted
    ? todos
    : todos.filter(todo => !todo.isCompleted)

  const sortFunction =
    sortOrder === 'priority' ? sortTodosByPriority : sortTodosByText
  return filteredTodos.sort(sortFunction)
}
