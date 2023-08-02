import React, { useState } from 'react'
import TodoForm from './TodoForm';


//edit todo list
function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState ({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }
if (edit.id) {
  return <TodoForm edit={edit} onSubmit={submitUpdate} />
}
  //check if todo is completed or not
  
  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
    key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <button onClick={() => removeTodo(todo.id)}
        className='delete-icon'>
          Remove </button>
        <button onClick={() => setEdit({ id: todo.id, value: todo.text })}
        className='edit-icon'>Edit</button>
      </div>
    </div>
  ) ) ;
}

export default Todo