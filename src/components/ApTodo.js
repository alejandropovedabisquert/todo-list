import { useRef } from "react";

const ApTodo = ({todo, setList, dragStart, dragEnter, drop}) =>{



    return(
        <div className="bg-white rounded-md p-2 my-2 shadow-md break-words" onDragStart={(e) => dragStart(e, todo.id)} onDragEnter={(e) => dragEnter(e, todo.id)} onDragEnd={drop} draggable> 
            {todo.task}
        </div>
    )

}

export default ApTodo