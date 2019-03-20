import shortid from 'shortid'
import { ActionTypes } from 'src/actions'

const defaultState = [
  {
    id: 'test',
    text: 'test',
    priority: 0,
    isCompleted: false,
  },
]

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO: {
      // id must be unique, thus it is generated from a library
      // By default, isCompleted should be false as a new todo won't be added in a complete state
      const newTodo = {
        id: shortid.generate(),
        text: action.text,
        priority: action.priority,
        isCompleted: false,
      }

      return {
        ...state,
        newTodo,
      }
    }
  }
}
