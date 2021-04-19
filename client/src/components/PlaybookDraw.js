import React, { useRef, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import CanvasDraw from 'react-canvas-draw'
import { useHistory } from 'react-router'


import './PlaybookDraw.css'


const PlaybookDraw = () => {

    const [form, setForm] = useState({
        playTitle: '',
        playArt: '{"lines":}'
    })

    const history = useHistory()

    const firstCanvas = useRef(null)
    const secondCanvas = useRef(null)




    const handleSubmit = (e) => {
        e.preventDefault()
        const data = firstCanvas.current.getSaveData()
        console.log(data)
        secondCanvas.current.loadSaveData(data)

    
        setForm({
            playTitle: e.target.value,
            playArt: JSON.parse(data)
        })

        fetch('/api/v1/playbook', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                playTitle: form.playTitle,
                playArt: form.playArt,
            })
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.error) {
                alert(data.error);
            } else {
                history.push('/Offenseplaybook')
            }
        })
    }
    
    
    
    

    const handleChange = (e) => {
        const data = firstCanvas.current.getSaveData()
        
        setForm({
            playTitle: e.target.value,
            playArt: JSON.parse(data)
        })
    }



    

    const clear = () => {
        firstCanvas.current.clear()
    }

    const undo = () => {
        firstCanvas.current.undo()
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <h1>Play Creator</h1>
                    <Form.Label>Play Name</Form.Label>
                    <Form.Control onChange={handleChange} type="text" name="playTitle" value={form.playTitle} placeholder="Play Name" />
                </Form.Group>
                <Form.Group style={{marginLeft: '7%'}}>
                    <CanvasDraw name="playArt" value={form.playArt} className="first-playbook"
                        brushRadius = {1}
                        brushColor = 'black'
                        hideGrid = {false}
                        ref={firstCanvas}
                        imgSrc="https://murals-weblinc.netdna-ssl.com/product_images/american-football-field-background-31743252/5ec82f54bd89dd0018f77517/zoom.jpg?c=1590177620"
                        canvasHeight = '700px'
                        canvasWidth = '1000px'
                    />
                </Form.Group>
                <Form.Group>
                    <Button type="submit">Save</Button>
                    <Button onClick={undo}>Undo</Button>
                    <Button onClick={clear}>Clear</Button>
                </Form.Group>
            </Form>
                


            <div style={{marginTop: '5%'}}>
                <CanvasDraw className="first-playbook"
                    ref={secondCanvas}
                    disabled={true}
                    imgSrc="https://murals-weblinc.netdna-ssl.com/product_images/american-football-field-background-31743252/5ec82f54bd89dd0018f77517/zoom.jpg?c=1590177620"
                    canvasHeight = '700px'
                    canvasWidth = '1000px'
                />
            </div>
        </Container>

    )
}
 
export default PlaybookDraw;