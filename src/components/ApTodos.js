import { useRef } from "react";
import ApTodo from "./ApTodo"

const ApTodos = ({todos, setList}) =>{

    const dragItem = useRef();
    const dragOverItem = useRef();

    const dragStart = (e, position) => {
        dragItem.current = position;
    };

    const dragEnter = (e, position) => {
        dragOverItem.current = position;
    }

    const drop = (e) => {
        e.preventDefault()
        const todo = todos.find(item => item.id === dragOverItem.current)
        const newList = todos.filter(item => item.id !== dragOverItem.current)
        setList([...newList, todo]);

    };

    return(
        <div>
            {
                todos.map((item, index)=>(
                    <ApTodo key={index} todo={item} setList={setList} dragStart={dragStart} dragEnter={dragEnter} drop={drop}/>
                ))
            }

        </div>
    )

}

export default ApTodos