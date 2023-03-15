import ApTodo from "./ApTodo"

const ApTodos = ({todos}) =>{


    return(
        <div>
            {
                todos.map((item, index)=>(
                    <ApTodo key={index} todo={item}/>
                ))
            }

        </div>
    )

}

export default ApTodos