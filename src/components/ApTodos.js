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

        // const copyListItems = Object.keys({...todos});
        // const dragItemContent = copyListItems[dragItem.current];
        // console.log(dragItemContent, "dragg item copy list");
        // console.log(dragOverItem.current, "dragg over copy list");
        // copyListItems.splice(dragItem.current, 1);
        // copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        // dragItem.current = null;
        // dragOverItem.current = null;
        // console.log(copyListItems);
        // setList(copyListItems);
        var temp = Object.assign({}, todos)
        var tobj
        var resp = {}
        var prop
        console.log(temp);
        tobj = temp[todos.length]
        delete temp[0]
        
        for(prop in temp){
            
            if (prop===dragOverItem.current) resp[dragItem.current] = tobj;
            resp[prop] = temp[prop]; 
        }
        setList(resp)
        

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