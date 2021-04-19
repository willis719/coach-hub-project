import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'



export default function ProtectedRoute(props) {
    const coach = useSelector((state) => state.coach)

    if (coach) {
        return <Route {...props}/>
    } else {
        return <Redirect to="/login" />
    }
}
