import React, { useState, useEffect } from 'react'
import RacerDetail from '../components/RacerDetail';
import { RacerForm } from '../components/RacerForm';

export default function Racers(props){
    const [racers, setRacers] = useState([])
    const [season, setSeason] = useState(2021)
    const [round, setRound]  = useState(1)

    useEffect(() => {
        fetch(`http://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
            .then(res => res.json())
            .then(data => setRacers(data.MRData.StandingsTable.StandingsLists[0].DriverStandings))

    })
        const handleForm = (e) =>{
            e.preventDefault();
            console.log('Form');
            const seasonInput = e.target.season.value;
            const roundInput = e.target.round.value
            setSeason(seasonInput);
            setRound(roundInput);
        }

        return (
            <div>
                This is the Racers Page
                <RacerForm handleForm={handleForm}/>
                {racers.length ? (
                <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                    </tr>
                </thead>
                    <tbody>
                        {racers.map((r, i) => <RacerDetail key={i} racer={r} />)}
                    </tbody>
                
                </table>): null}
            </div>
        )
    }

