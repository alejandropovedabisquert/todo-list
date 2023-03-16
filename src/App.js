import React, { useState } from 'react';
import ApTableTodoForm from './components/ApTableTodoForm';
import ApTableTodos from "./components/ApTableTodos";
import ApSetData from './components/hooks/ApSetData';
function App() {
  const [tableTodos, setTableTodos] = useState([])

  const addTable = (newTable)=>{
    let newItem = {id: +new Date(), table:newTable, todoList:[]} 
    setTableTodos([...tableTodos, newItem])

  }


  return (
    <div>
      <h1 className="text-2xl" >TODO List Drag & Drop</h1>
      <ApTableTodoForm addTable={addTable}/>
      <ApTableTodos tableTodos={tableTodos}/>
    </div>
  )
}

export default App;
