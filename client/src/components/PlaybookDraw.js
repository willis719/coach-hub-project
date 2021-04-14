import React, { useRef } from 'react'
import { Button } from 'react-bootstrap'
import CanvasDraw from 'react-canvas-draw'
import CoachNav from './CoachNav'

const PlaybookDraw = () => {

    const firstCanvas = useRef(null)
    const secondCanvas = useRef(null)

    const handleClick = () => {
        const data = firstCanvas.current.getSaveData()
        console.log(data)
        secondCanvas.current.loadSaveData(data)
    }

    const clear = () => {
        firstCanvas.current.clear()
    }

    const undo = () => {
        firstCanvas.current.undo()
    }

    return (
        <div>
            <div>
                <CoachNav />
            </div>
            <Button onClick={handleClick}>
                Save drawing
            </Button>
            <Button onClick={clear}>
                Clear
            </Button>
            <Button onClick={undo}>
                Undo
            </Button>
            <div>
                <CanvasDraw
                    brushRadius = {1}
                    brushColor = 'black'
                    hideGrid = {false}
                    ref={firstCanvas}
                />
            </div>
            <div style={{marginTop: '5%'}}>
                <CanvasDraw 
                    ref={secondCanvas}
                    disabled={true}
                />
            </div>

        </div>

    )
}
 
export default PlaybookDraw;