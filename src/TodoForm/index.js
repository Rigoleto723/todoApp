import React from 'react';
import { TodoContext } from '../TodoContext'
import './TodoForm.css';

function TodoForm() {

    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoVale] = React.useState('')

    const isDescriptionValid = (newTodoValue.length >= 2) ? true : false;

    const onSubmit = (event) => {
        event.preventDefault();
        if(!isDescriptionValid) return;
        addTodo(newTodoValue.trim());
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoVale(event.target.value)
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                placeholder='Escribe aqui la nueva tarea'
                value={newTodoValue}
                onChange={onChange}
                required
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    type="button"
                    className="TodoForm-button
                    TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    type="submit"
                    className= {`TodoForm-button TodoForm-button--add ${isDescriptionValid ? '' : 'Disable'}`}
                    disabled={!isDescriptionValid}
                >Añadir</button>
            </div>

        </form>
  )
}

export { TodoForm };