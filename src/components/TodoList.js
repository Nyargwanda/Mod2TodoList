import React, { useState }from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm';


function TodoList() {
  const [todos, setToDos] = useState ([]);

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
//add new Todo items
    const newTodos = [todo, ...todos];

    setToDos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setToDos((prev) => prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setToDos(removeArr)
  };

  const completedTodo = (id) => {
    const updatedTodos = todos.map((todo) => 
      todo.id === id ? {...todo, isComplete: !todo.isComplete } :
      todo);
    setToDos(updatedTodos);
  }
      

  return (
    <div>
      <h1>Things To Do Today</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo 
      todos={todos} 
      completedTodo={completedTodo} 
      removeTodo={removeTodo}
      updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList