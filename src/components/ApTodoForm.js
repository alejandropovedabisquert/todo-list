import { useRef } from "react"

const ApTodoForm = ({addTodo}) => {
    const todoRef = useRef(undefined);
    const buttonClassStyle = "border-2 z-20 bg-white border-secondary-color p-2 px-4 inline-block rounded-md shadow-md transition-all font-bold duration-300 relative hover:text-white before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:-z-10 before:bg-primary-color before:transition-all before:duration-300 before:hover:w-full"

    const handleSubmit = (e) =>{
        e.preventDefault()
        const todo = todoRef.current.value

        if (todo !== "") {
            addTodo(todo)
            e.target.reset()
        }else{
            console.log("esta vacio");
        }

    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea type='text' ref={todoRef} className="bg-gray-50 border border-gray-300 text-sm rounded-lg p-2.5"/>
                <button type="submit" className={buttonClassStyle}>Add TODO</button>
            </form>
        </div>
    )
}

export default ApTodoForm
