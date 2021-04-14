import React from 'react'
import { Col, Nav } from 'react-bootstrap';
import './Concepts.css'

const Concepts = () => {
    return (
        <Col lg="4">
            <div align="center">
                <div style={{ marginTop: '5%' }}>
                    <h3>Basic Concepts</h3>
                </div>
            </div>
            <div>
                <div className="def-title">
                    <h5>Defensive Concepts</h5>
                </div>
                <hr className="concept-horiz" />
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">Cover 1 Basics</Nav.Link>
                    <Nav.Link eventKey="link-1">Cover 2 Basics</Nav.Link>
                    <Nav.Link eventKey="link-2">Cover 3 Basics</Nav.Link>
                    <Nav.Link eventKey="link-3">Cover 4 Basics</Nav.Link>
                </Nav>
            </div>
            <div>
                <div className="def-title">
                    <h5>Offensive Concepts</h5>
                </div>
                <hr className="concept-horiz" />
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">Offensive Line Gaps</Nav.Link>
                    <Nav.Link eventKey="link-1">Reciever Routes</Nav.Link>
                    <Nav.Link eventKey="link-2">Zone Blocking</Nav.Link>
                    <Nav.Link eventKey="link-3">Offensive Counters</Nav.Link>
                </Nav>
            </div>
        </Col>
    )
}

export default Concepts;
