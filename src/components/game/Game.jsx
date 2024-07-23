import { useEffect, useState } from 'react';
import Card from './Card';
import './Game.css'


function Game({house}) {
    const [data, setData] = useState(null);
    const [chosenData, setChosenData] = useState([]);
    const [numCards, setNumCards] = useState(12)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)

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

    useEffect(() => {
        if (data) {
            const shuffledData = [...data].sort(() => 0.5 - Math.random());
            const selectedCards = shuffledData.slice(0, numCards);
            setChosenData(selectedCards);
            console.log(selectedCards);
        }
    }, [numCards, data]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    
    return (
        <div className= {`main-container-game ${house}`}>
            <div className='header'>
                <div className='small-logo-box'>
                    <img src="/logo.png" alt="" />
                </div>
                <div className='score-box'>
                    <p>Your score:  {score}</p>
                    <p>Best score:  {bestScore}</p>
                </div>
            </div>
            <div className='card-box'>
                {chosenData.map((character) => (
                    <Card name={character.name} img={character.img} key={character.key} />
                ))}
            </div>
        </div>
    )
}

export default Game