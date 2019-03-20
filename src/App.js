import React, { Component } from 'react'
import styles from './App.module.scss'
import AddTodo from './containers/AddTodo'
import Filter from './containers/Filter'
import TodoList from './containers/TodoList'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <AddTodo />
        <hr />
        <Filter />
        <TodoList />
      </div>
    )
  }
}

export default App
