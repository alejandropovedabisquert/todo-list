import { useRef } from "react"

const ApTableTodoForm = ({addTable}) => {
    const tableRef = useRef(undefined);
    const buttonClassStyle = "border-2 border-secondary-color p-2 px-4 inline-block rounded-md shadow-md transition-all font-bold duration-300 relative hover:text-white before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:-z-10 before:bg-primary-color before:transition-all before:duration-300 before:hover:w-full"

    const handleSubmit = (e) =>{
        e.preventDefault()
        const table = tableRef.current.value

        if (table !== "") {
            addTable(table)
            e.target.reset()
        }else{
            console.log("esta vacio");
        }

    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' ref={tableRef} className="bg-gray-50 border border-gray-300 text-sm rounded-lg p-2.5"/>
                <button type="submit" className={buttonClassStyle}>Add Table</button>
            </form>
        </div>
    )
}

export default ApTableTodoForm
