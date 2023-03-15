import { useState } from "react"

const ApTodoForm = ({addTodo}) => {
    const [userInput, setUserinput] = useState()

    const handleChange = (e) =>{
        setUserinput(e.currentTarget.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (userInput.trim() !== '') {
            addTodo(userInput)
            setUserinput('')
        }
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange}/>
                <button>Add TODO</button>
            </form>
        </div>
    )
}

export default ApTodoForm
