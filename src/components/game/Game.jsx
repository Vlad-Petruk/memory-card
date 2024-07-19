import { useEffect, useState, useMemo } from 'react';
import Card from './Card';
import './Game.css'

function Game({house}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch('https://hp-api.onrender.com/api/characters')
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const arrayData = data
                .filter(character => character.image !== '')
                .map(character => ({
                    key: character.id,
                    name: character.name,
                    img: character.image,
                }));
            setData(arrayData);
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
    }, []); // Empty dependency array means this effect runs once after the initial render

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    return (
        <div className= {`house-card ${house}`}>
            {console.log(data)}
            <div className='card-box'>
                {data.map((character) => (
                    <Card name={character.name} img={character.img} key={character.id} />
                ))}
            </div>
        </div>
    )
}

export default Game