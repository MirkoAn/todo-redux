import { FILTER_ALL, ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER } from './actionTypes'

const initialTodoState = {
  nextId: 2,
  data: {
    1: {
      content: 'Content 1',
      completed: false
    }
  }
}

export const todos = (state = initialTodoState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return (
        {
          ...state,
          data: {
            ...state.data,
            [state.nextId]: {
              completed: false,
              content: action.payload.content
            },
          },
          nextId: state.nextId + 1
        }
      )
    }
    case TOGGLE_TODO: {
      console.log(action.payload)
      return (
        {
          ...state,
          data: {
            ...state.data,
            [action.payload.id]: {
              ...state.data[action.payload.id],
              completed: !(state.data[action.payload.id].completed)
            }
          }
        }
      )
    }
    case DELETE_TODO: {
      console.log(action.payload)
      return (
        {
          ...state,
          data: {
            ...state.data,
            ...state.data.delete([action.payload.id])
            }
          }
      )
    }
    default: {
      return state
    }
  }
}

export const VisibilityFilter = (state = { activeFilter: FILTER_ALL }, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return ({
        activeFilter: action.payload.filter
      })
    }
    default: {
      return state
    }
  }
}