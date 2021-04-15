import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER } from './actionTypes'

export const addTodo = (content) => (
  {
    type: ADD_TODO,
    payload: {
      content
    }
  }
)

export const ToggleTodo = (id) => (
  {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  }
)

export const DeleteTodo = (id) => (
  {
    type: DELETE_TODO,
    payload: {
      id
    }
  }
)

export const SetFilter = (filter) => (
  {
    type: SET_FILTER,
    payload: {
      filter
    }
  }
)