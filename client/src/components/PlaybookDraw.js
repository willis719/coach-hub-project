import React, { useRef } from 'react'
import { Button } from 'react-bootstrap'
import CanvasDraw from 'react-canvas-draw'
import CoachNav from './CoachNav'
import './PlaybookDraw.css'


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
            <h1>Offense Play Creator</h1>
            <div style={{marginTop: '1%', marginBottom: '2%'}}>
                <Button className="save" onClick={handleClick}>
                    Save drawing
                </Button>
                <Button className="clear" onClick={clear}>
                    Clear
                </Button>
                <Button className="undo" onClick={undo}>
                    Undo
                </Button>
            </div>
            <div>
                <CanvasDraw style={{zIndex: -1}} className="first-playbook"
                    brushRadius = {5}
                    brushColor = 'black'
                    hideGrid = {false}
                    ref={firstCanvas}
                    imgSrc="https://murals-weblinc.netdna-ssl.com/product_images/american-football-field-background-31743252/5ec82f54bd89dd0018f77517/zoom.jpg?c=1590177620"
                    canvasHeight = '800px'
                    canvasWidth = '1000px'
                />
            </div>


            <div style={{marginTop: '5%'}}>
                <CanvasDraw className="first-playbook"
                    ref={secondCanvas}
                    disabled={true}
                    imgSrc="https://murals-weblinc.netdna-ssl.com/product_images/american-football-field-background-31743252/5ec82f54bd89dd0018f77517/zoom.jpg?c=1590177620"
                    canvasHeight = '800px'
                    canvasWidth = '1000px'
                />
            </div>

        </div>

    )
}
 
export default PlaybookDraw;