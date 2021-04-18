import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import {v4} from 'uuid'
import _ from 'lodash'
import './CreateDepth.css'



const CreateDepth = () => {

    const item = {
        id: v4(),
        name: "Clean"
    }

    const item2 = {
        id: v4(),
        name: "Wash Car"
    }


    const [state, setState] = useState({
        "QB": {
            title: "QB",
            items: [item, item2]
        },
        "RB": {
            title: "RB",
            items: []
        },
        "WR": {
            title: "WR",
            items: []
        }
    })

    const handleDragEnd = ({destination, source}) => {
        console.log("from", source)
        console.log("to", destination)

        // Check if item is in a valid destination
        if (!destination) {
            console.log("not dropped in droppable")
            return
        }

        // Check if item is in the same place
        if (destination.index === source.index && destination.droppableId === source.droppableId) {
            console.log("Dropped in same place")
            return
        }

        // Creating a copy of item before removing from state
        const itemCopy = {...state[source.droppableId].items[source.index]}
        
        setState(prev => {
            prev = {...prev}

            // removes from previous items array
            prev[source.droppableId].items.splice(source.index, 1)

            // Adding to new items array location
            prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)
            return prev
        })
    }




    return (
        <div className="depth-chart">
            <DragDropContext onDragEnd={handleDragEnd}>
                {_.map(state, (data, key) => {
                    return (
                        <div key={key} className="column">
                            <h3>{data.title}</h3>
                            <Droppable droppableId={key}>
                                {/* essential for drag and drop they are props from the package */}
                                {(provided) => {
                                    return (
                                        <div className="droppable-col" ref={provided.innerRef} {...provided.droppableProps}>
                                            {/* the index is the index of the items from inside of state */}
                                            {data.items.map((el, index) => {
                                                return (
                                                    <Draggable draggableId={el.id} key={el.id} index={index}>
                                                        {(provided) => {
                                                            return (
                                                                <div className="item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                    {el.name}
                                                                </div>
                                                            )
                                                        }}
                                                    </Draggable>
                                                )
                                            })}
                                            {/* this allows boxes to adjust in size depending on how many items are there */}
                                            {provided.placeholder}
                                        </div>
                                    )
                                }}
                            </Droppable>
                        </div>
                    )
                })}
            </DragDropContext>
        </div>
    )
}

export default CreateDepth;
