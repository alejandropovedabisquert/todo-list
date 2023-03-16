import { useRef } from "react";
import ApTodo from "./ApTodo"

const ApTodos = ({todos, setList}) =>{

    const dragItem = useRef();
    const dragOverItem = useRef();

    const dragStart = (e, position) => {
        dragItem.current = position;
        console.log(e.target.innerHTML);
    };

    const dragEnter = (e, position) => {
        dragOverItem.current = position;
        console.log(e.target.innerHTML);
    }

    const drop = (e) => {
        console.log(Object.keys(todos));
        const copyListItems = [...todos];
        const dragItemContent = copyListItems[dragItem.current];
        console.log(dragItem.current, "dragg item copy list");
        console.log(dragOverItem.current, "dragg over copy list");
        // copyListItems.splice(dragItem.current, 1);
        // copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        // dragItem.current = null;
        // dragOverItem.current = null;
        // setList(copyListItems);
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