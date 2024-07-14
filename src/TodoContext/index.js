import React from "react";
import { useLocalStorage } from "./userLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }){

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
      
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}



export { TodoContext, TodoProvider };