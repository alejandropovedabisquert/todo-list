import ApTodos from "./components/ApTodos";
import React, { useState } from 'react';
import ApTodoForm from "./components/ApTodoForm";

function App() {
  const list = [{task:'tarea 1', task:'tarea 2', task:'tarea 3'}]

  const [todos, setTodos] = useState(list)

  const addTodo = (newTodo)=>{
    console.log('newTodo', newTodo);
    setTodos({...todos}, newTodo)
    console.log(todos);
  }
  
  return (
    <div>
      <h1 className="text-2xl" >TODO List Drag & Drop</h1>
      <ApTodoForm addTodo={addTodo}/>
      {/* <ApTodos todos={todos}/> */}

    </div>
  )
}

export default App;
