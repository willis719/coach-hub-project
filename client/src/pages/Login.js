import React from 'react'
import CoachNav from '../components/CoachNav'
import LoginForm from '../components/LoginForm'

// email, password, name, team
const Login = () => {
    return (
        <div>
            <div>
                <CoachNav />
            </div>
            <h1>Login</h1>
            <LoginForm />
        </div>
    )
}

export default Login;