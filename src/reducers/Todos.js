import shortid from 'shortid'
import { ActionTypes } from '../actions'

const defaultState = [
  {
    id: 'test',
    text: 'test',
    priority: 1,
    isCompleted: false,
  },
  {
    id: '2',
    text: 'test complete',
    priority: 1,
    isCompleted: true,
  },
]

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO: {
      // When entering an empty todo, it looks odd, so put in a placeholder instead
      const text = action.text ? action.text : '<empty todo>'
      // id must be unique, thus it is generated from a library
      // By default, isCompleted should be false as a new todo won't be added in a complete state
      const newTodo = {
        id: shortid.generate(),
        text,
        priority: action.priority,
        isCompleted: false,
      }

      return [...state, newTodo]
    }
    // Delete works by simply filtering everything that ISN'T the one being deleted
    case ActionTypes.DELETE_TODO: {
      return state.filter(todo => todo.id !== action.id)
    }
    // Complete works by mapping the array, and then only updating the one that matches
    case ActionTypes.COMPLETE_TODO: {
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo
        }

        return {
          ...todo,
          isCompleted: true,
        }
      })
    }
    default: {
      return state
    }
  }
}
