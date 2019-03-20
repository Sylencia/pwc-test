import { ActionTypes } from '../actions'

const defaultState = {
  sortOrder: 'name',
  showCompleted: true,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_SORT_ORDER: {
      return { ...state, sortOrder: action.order }
    }
    case ActionTypes.SET_SHOW_COMPLETED: {
      return { ...state, showCompleted: action.showCompleted }
    }
    default: {
      return state
    }
  }
}
