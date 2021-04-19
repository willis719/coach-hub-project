import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { setCoach } from '../redux/actions'
import './LoginForm.css'

const LoginForm = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/api/v1/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: form.email,
                password: form.password,
            }),
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                alert(data.error)
            } else {
                alert('User logged in successfully')
                dispatch(setCoach(data))
                history.push('/')
            }
        })
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div>
            <Container>
                <Form className="login-form" onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={form.email} name="email" onChange={handleChange} placeholder="email@example.com" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={form.password} onChange={handleChange} name="password" />
                    </Form.Group>
                    <Button type="submit">Login</Button>
                </Form>
            </Container>
        </div>
    )
}

export default LoginForm;
