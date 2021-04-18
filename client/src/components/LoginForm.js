import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import './LoginForm.css'

const LoginForm = () => {
    return (
        <div>
            <Container>
                <Form className="login-form">
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="email@example.com" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <Button>Login</Button>
                </Form>
            </Container>
        </div>
    )
}

export default LoginForm;
