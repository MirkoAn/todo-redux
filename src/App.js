import { Provider } from 'react-redux';
import './App.css';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import VisibilityFilter from './Components/VisibilityFilter';
import store from './redux/store'

const filters = ['all', 'completed', 'incomplete']

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>TODO Managers</h1>
        <AddTodo />
        <TodoList todos={[{ content: 'Task1' }, { content: 'Task 2' }]} />
        <VisibilityFilter filters={filters} />
      </div>
    </Provider>
  );
}

export default App;
