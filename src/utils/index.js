export const getPriorityAsString = priority =>
  ({
    1: 'high',
    2: 'medium',
    3: 'low',
  }[priority] || 'unknown')
