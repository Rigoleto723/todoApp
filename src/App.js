import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { Todoitem } from './TodoItem';
import CreateTodoButton from './CreateTodoButton';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <Todoitem />
        <Todoitem />
        <Todoitem />
      </TodoList>

      <CreateTodoButton />

    </div>
  );
}

export default App;
