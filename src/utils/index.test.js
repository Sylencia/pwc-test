import { getPriorityAsString, getTotalTodos, getCompletedTodos } from '.'

describe('getPriorityAsString', () => {
  it('returns the correct string', () => {
    expect(getPriorityAsString(0)).toEqual('unknown')
    expect(getPriorityAsString(1)).toEqual('high')
    expect(getPriorityAsString(2)).toEqual('medium')
    expect(getPriorityAsString(3)).toEqual('low')
  })
})

describe('Todo Counts', () => {
  const todos = [
    {
      id: '1',
      text: 'test',
      priority: 1,
      isCompleted: false,
    },
    {
      id: '2',
      text: 'test',
      priority: 2,
      isCompleted: true,
    },
    {
      id: '3',
      text: 'test',
      priority: 3,
      isCompleted: false,
    },
    {
      id: '4',
      text: 'test',
      priority: 1,
      isCompleted: true,
    },
    {
      id: '5',
      text: 'test',
      priority: 2,
      isCompleted: false,
    },
  ]

  it('returns the correct number of total todos', () => {
    expect(getTotalTodos([])).toEqual(0)
    expect(getTotalTodos(todos)).toEqual(5)
  })

  it('returns the correct number of completed todos', () => {
    expect(getCompletedTodos([])).toEqual(0)
    expect(getCompletedTodos(todos)).toEqual(2)
  })
})
