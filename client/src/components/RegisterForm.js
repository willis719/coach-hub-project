import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import './RegisterForm.css'

const RegisterForm = () => {
    return (
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="full name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="email@example.com" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Team</Form.Label>
                        <Form.Control as="select">
                            <option disabled>default</option>
                            <option>Falcons</option>
                            <option>BullDogs</option>
                            <option>Tigers</option>
                        </Form.Control>
                    </Form.Group>
                    <Button>Login</Button>
                </Form>
            </Container>
    )
}

export default RegisterForm
