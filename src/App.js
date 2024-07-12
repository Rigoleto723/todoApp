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
  return (
    <>

      <TodoCounter completed={16} total={25}  />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
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