import React from 'react';
import { useLocalStorage } from './userLocalStorage';
import { AppUI } from './AppUI';

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: true },
//   { text: 'Picar Tomante', completed: false },
//   { text: 'Sofreir', completed: false },
//   { text: 'Hecharle a la arepa', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));


function App() {
  
  
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error} = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
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


  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = !
    newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
  
}

export default App;