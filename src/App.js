import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import CreateTodoButton from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Picar Tomante', completed: false },
  { text: 'Sofreir', completed: false },
  { text: 'Hecharle a la arepa', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      // función texto sin tildes
      const noTildes = (text) => {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      };
      const todoText = noTildes(todo.text.toLowerCase());
      const serachText = noTildes(searchValue.toLowerCase());
      return todoText.includes(serachText);
    }
  );
  
  console.log('El usuario busco ' + searchValue);

  return (
    <>

      <TodoCounter completed={completedTodos} total={totalTodos}  />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App;