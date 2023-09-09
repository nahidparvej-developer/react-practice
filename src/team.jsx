import { useState } from "react"

export default function Team() {
    const[ team, setTeam]  = useState(11);

    const handleAdd = () => {
        const teamCount = team + 1;
        setTeam(teamCount);
    }
    const handlRemoved = () => {
        setTeam(team - 1)
    }

    return (
        <div className="team">
            <h3>Player : {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handlRemoved}>Removed</button>
        </div>
    )
}