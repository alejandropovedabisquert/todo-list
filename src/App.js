import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {v4} from "uuid"

const item = {
  id: v4(),
  name: "Comer cosas"
}
const item2 = {
  id: v4(),
  name: "No comer cosas"
}


const initialState = {
  "todo": {
    id: v4(),
    title: "Todo",
    items: [item, item2]
  },
  "en-progreso": {
    id: v4(),
    title: "En Progreso",
    items: []
  },
  "hecho": {
    id: v4(),
    title: "Hecho",
    items: []
  }
}
function App() {
  const [state, setState] = useState(initialState)

  const handleDragEnd = ({destination, source}) =>{

    console.log("from", source.droppableId)
    console.log("to", destination)

    if (!destination) {
      console.log("not dropped in droppable")
      return
    }

    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      console.log("dropped in same place")
      return
    }

    // Creacion de copia del itema antes de borrarlo del state
    const itemCopy = {...state[source.droppableId].items[source.index]}
    
    setState(prev =>{
      prev = {...prev}
      //Borra desde el array de items anterior
      prev[source.droppableId].items.splice(source.index, 1)

      // Añade a una nueva localizacion de array de items
      prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)


      return prev
    })

  }

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        {/* state[element].title */}
        <div className='todo flex justify-around'>
          {Object.keys(state).map((element, key) =>{
            return (
              <div key={key} className='table w-72 text-center'>
                <h1>{state[element].title}</h1>
                <Droppable droppableId={element}>
                  {(provided) =>{
                    return(
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="table-col bg-neutral-300 p-2"
                      >
                        {state[element].items.map((item, index)=>{
                          return(
                            <Draggable key={item.id} index={index} draggableId={item.id}>
                              {(provided) =>{
                                return(
                                  <div
                                    className='bg-white rounded shadow-lg my-2'
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <p>{item.name}</p>
                                  </div>
                                )
                              }}
                            </Draggable>
                          )
                        })}
                        {provided.placeholder}
                      </div>
                    )
                  }}
                </Droppable>
              </div>
            )
          })}
        </div>
      </DragDropContext>
    </div>
  )
}

export default App;
