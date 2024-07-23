import { useEffect, useState } from 'react';
import Card from './Card';
import './Game.css'


function Game({house}) {
    const [data, setData] = useState(null);
    const [chosenData, setChosenData] = useState([]);
    const [numCards, setNumCards] = useState(4)
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
                    isClicked: false
                }));
            setData(arrayData);
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
    }, []); // Empty dependency array means this effect runs once after the initial render

    const shuffleData = (array) => {
        const shuffledData = [...array].sort(() => 0.5 - Math.random());
        return shuffledData
    }

    useEffect(() => {
        if (chosenData.length > 0) {
            shuffleData(chosenData);
        }
    }, [chosenData]);

    useEffect(() => {
        if (data) {
            const shuffledData = shuffleData(data)
            const selectedCards = shuffledData.slice(0, numCards);
            setChosenData(selectedCards);
            console.log(selectedCards);
        }
    }, [numCards, data]);

    const levelUp = () => {
        setNumCards(numCards + 2)
    }

    const handleWin = () => {
        console.log('You won')
    }

    const handleLoss = () => {
        console.log('You lost')
    }

    const handleCardClick = (card)=> {
        if( card.isClicked !== true) {
            const updatedChosenData = chosenData.map(character =>
                character.key === card.key ? { ...character, isClicked: true } : character
            );
            setScore(score + 1)
            if(updatedChosenData.every(item => item.isClicked === true)) {
                if(numCards === 12) {
                    return handleWin()
                } else levelUp()

            }
            setChosenData(shuffleData(updatedChosenData));
        } else handleLoss()
        console.log(card.name)
    }

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
                    <Card name={character.name} img={character.img} key={character.key} handleClick={()=>handleCardClick(character)}/>
                ))}
            </div>
        </div>
    )
}

export default Game