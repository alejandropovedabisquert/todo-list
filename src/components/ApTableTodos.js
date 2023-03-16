import ApTableTodo from "./ApTableTodo";

const ApTableTodos = ({tableTodos}) =>{

    return(
        <div className='flex flex-row'>
            {
                tableTodos.map((item, index)=>(
                    <ApTableTodo key={index} tableTodo={item}/>
                ))
            }
            
        </div>
    )

}

export default ApTableTodos