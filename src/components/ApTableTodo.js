import ApTodoForm from "../components/ApTodoForm";
import ApTodos from "../components/ApTodos";
import { useState } from "react";

const ApTableTodo = ({tableTodo}) =>{
    const [todos, setTodos] = useState(tableTodo.todoList)
    const addTodo = (newTodo)=>{
      let newItem = {id: +new Date(), task:newTodo} 
      setTodos([...todos, newItem])

    }

    const setList = (datos) =>{
        console.log(datos, "datos setlist");
        //console.log(datos);
        setTodos(datos)
    }

    return(
        <div>
            <div className="bg-gray-200 rounded-md shadow-lg mr-2 p-4 w-96" draggable>
                <h2 className="text-xl font-bold mb-2">{tableTodo.table}</h2>
                <ApTodoForm addTodo={addTodo}/>
                <ApTodos todos={todos} setList={setList}/>

            </div>
        </div>
    )

}

export default ApTableTodo