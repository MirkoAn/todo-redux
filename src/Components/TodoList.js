import React from 'react';
import { connect } from 'react-redux';
import { ToggleTodo } from '../redux/actions'
import { FILTER_ALL, FILTER_COMPLETED } from '../redux/actionTypes';
import _ from 'underscore'



const Todo = ({ todo, id, ToggleTodo }) => (
  <li className={todo.completed ? 'completed' : ''} onClick={() => ToggleTodo(id)}>{todo.content}</li>
) 

function TodoList({todos, ToggleTodo}) {
  return (
    _.keys(todos).map((id) => (
      <Todo key={id} id={id} ToggleTodo={ToggleTodo} todo={todos[id]}></Todo>
    ))
  )
}

const mapState = (state) => {
  if (state.VisibilityFilter.activeFilter === FILTER_ALL) {
    return { todos: state.todos.data }
  } else if (state.VisibilityFilter.activeFilter === FILTER_COMPLETED) {
    return ({
      todos: _.pick(state.todos.data, (todo) => todo.completed)
    })
  } else {
    return ({
      todos: _.pick(state.todos.data, (todo) => !todo.completed)
    })
  }
}

export default connect(mapState, {ToggleTodo})(TodoList)