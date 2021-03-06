
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import CoachNav from '../components/CoachNav';
import { useHistory } from 'react-router-dom'


const Register = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        team: ''
    })
    const history = useHistory()




    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/api/v1/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: form.name,
                email: form.email,
                password: form.password,
                team: form.team
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.error) {
                alert(data.error);
            } else {
                alert('User Registered Successfully')
                history.push('/login')
            }
        });
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };


    return (
        <div>
            <div>
                <CoachNav />
            </div>
            <h1>Register</h1>
            <div>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control value={form.name} onChange={handleChange} type="text" name="name" placeholder="full name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={form.email} onChange={handleChange} type="email" name="email" placeholder="email@example.com" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={form.password} onChange={handleChange} name="password" type="password" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Team</Form.Label>
                            <Form.Control onChange={handleChange} value={form.team} name="team" as="select">
                                <option disabled selected>default</option>
                                <option>Falcons</option>
                                <option>BullDogs</option>
                                <option>Tigers</option>
                            </Form.Control>
                        </Form.Group>
                        <Button type="submit">Register</Button>
                    </Form>
                </Container>
            </div>
        </div>
    )
}

export default Register;
