import React, { useEffect, useState } from 'react'
import CoachNav from '../components/CoachNav'

const Team = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('/api/v1/players')
            .then(res => res.json())
            .then(data => {
                setPlayers(data)
            })
    }, [])

    return (
        <div>
            <div>
                <CoachNav />
            </div>
            <h1>Falcons</h1>
            {
                players.map((player) => {
                    return(
                        <div key={player.id}>
                            <h1>{player.name}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Team;
