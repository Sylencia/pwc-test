import {
  getPriorityAsString,
  getTotalTodos,
  getCompletedTodos,
  getFilteredTodos,
} from '.'

const todos = [
  {
    id: '1',
    text: 'bbbbbb',
    priority: 1,
    isCompleted: false,
  },
  {
    id: '2',
    text: 'aaaaaa',
    priority: 2,
    isCompleted: true,
  },
  {
    id: '3',
    text: 'dddddd',
    priority: 3,
    isCompleted: false,
  },
  {
    id: '4',
    text: 'eeeeee',
    priority: 1,
    isCompleted: true,
  },
  {
    id: '5',
    text: 'cccccc',
    priority: 2,
    isCompleted: false,
  },
]

describe('getPriorityAsString', () => {
  it('returns the correct string', () => {
    expect(getPriorityAsString(0)).toEqual('unknown')
    expect(getPriorityAsString(1)).toEqual('high')
    expect(getPriorityAsString(2)).toEqual('medium')
    expect(getPriorityAsString(3)).toEqual('low')
  })
})

describe('Todo Counts', () => {
  it('returns the correct number of total todos', () => {
    expect(getTotalTodos([])).toEqual(0)
    expect(getTotalTodos(todos)).toEqual(5)
  })

  it('returns the correct number of completed todos', () => {
    expect(getCompletedTodos([])).toEqual(0)
    expect(getCompletedTodos(todos)).toEqual(2)
  })
})

describe('Sorting and Filtering Todos', () => {
  it('returns the correct list when sorting by name', () => {
    expect(getFilteredTodos(todos, 'name', true)).toEqual([
      {
        id: '2',
        text: 'aaaaaa',
        priority: 2,
        isCompleted: true,
      },
      {
        id: '1',
        text: 'bbbbbb',
        priority: 1,
        isCompleted: false,
      },
      {
        id: '5',
        text: 'cccccc',
        priority: 2,
        isCompleted: false,
      },
      {
        id: '3',
        text: 'dddddd',
        priority: 3,
        isCompleted: false,
      },
      {
        id: '4',
        text: 'eeeeee',
        priority: 1,
        isCompleted: true,
      },
    ])
  })

  it('returns the correct list when sorting by priority', () => {
    expect(getFilteredTodos(todos, 'priority', true)).toEqual([
      {
        id: '1',
        text: 'bbbbbb',
        priority: 1,
        isCompleted: false,
      },
      {
        id: '4',
        text: 'eeeeee',
        priority: 1,
        isCompleted: true,
      },
      {
        id: '2',
        text: 'aaaaaa',
        priority: 2,
        isCompleted: true,
      },
      {
        id: '5',
        text: 'cccccc',
        priority: 2,
        isCompleted: false,
      },
      {
        id: '3',
        text: 'dddddd',
        priority: 3,
        isCompleted: false,
      },
    ])
  })

  it('returns the correct list when filtering', () => {
    expect(getFilteredTodos(todos, 'name', false)).toEqual([
      {
        id: '1',
        text: 'bbbbbb',
        priority: 1,
        isCompleted: false,
      },
      {
        id: '5',
        text: 'cccccc',
        priority: 2,
        isCompleted: false,
      },
      {
        id: '3',
        text: 'dddddd',
        priority: 3,
        isCompleted: false,
      },
    ])
  })
})
