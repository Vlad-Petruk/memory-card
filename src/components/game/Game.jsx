import { useEffect, useState } from 'react';
import Card from './Card';
import EndGameModal from './EndGameModal';
import LoadingScreen from '../LoadingScreen';
import './Game.css'

// add  music and description of the game??
// create functionality like initialize pokemon

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


function Game({house}) {
    const [data, setData] = useState(null);
    const [chosenData, setChosenData] = useState([]);
    const [numCards, setNumCards] = useState(4)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0);
    const [gameCondition, setGameCondition] = useState(null);
    const [cardShowing, setCardShowing] = useState(true);
    const [round, setRound] = useState(1)

    const initializeCards = async (amount) => {
        setNumCards(amount);
    
        setLoading(true);
    
        await sleep(250);
        setLoading(false);
        setData(shuffleData(data));
    
        await sleep(800);
        setCardShowing(true);
      };

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

    const handleWin = () => {
        console.log('You won')
        setBestScore(score)
        setGameCondition('win')
    }

    const handleLoss = () => {
        console.log('You lost');
        if (score > bestScore) {
            setBestScore(score);
        }
        setGameCondition('loss')
    }

    const startNewGame = () => {
        initializeCards(4);
        setScore(0);
        setGameCondition(null);
        setRound(1)
    }

    async function handleCardClick(card) {
        if (!card.isClicked) {
            const updatedChosenData = chosenData.map(character =>
                character.key === card.key ? { ...character, isClicked: true } : character
            );
    
            setScore(prevScore => prevScore + 1);
    
            if (updatedChosenData.every(item => item.isClicked)) {
                if (numCards === 12) {
                    handleWin();
                } else {
                    setNumCards(numCards + 2);
                    setRound(round + 1)
                    initializeCards(numCards + 2)

                }
            } else {
                setCardShowing(false);
                setTimeout(() => {
                    setChosenData(shuffleData(updatedChosenData));
                    setCardShowing(true);
                }, 800);
            }
        } else {
            handleLoss();
        }
    
        console.log(card.name);
    }
    

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    
    return (
        <>
        {/* {loading&&<LoadingScreen house={house}/>} */}
        <div className= {`main-container-game ${house}`}>
            <div className='header'>
                <div className='small-logo-box'>
                    <img src="/logo.png" alt="" />
                </div>
                <div className='game-info'>
                    <p>Round {round}</p>
                    <p>{"Don't click on the same card twice."} </p>
                </div>
                <div className='score-box'>
                    <p>Your score:  {score}</p>
                    <p>Best score:  {bestScore}</p>
                </div>
            </div>
            <div className='card-box'>
                {chosenData.map((character) => (
                    <Card name={character.name} img={character.img} key={character.key} handleClick={()=>handleCardClick(character)} cardShowing={cardShowing}/>
                ))}
                 {gameCondition && <EndGameModal condition={gameCondition} handleClick={startNewGame}/>}
            </div>
        </div>
        </>
    )
}

export default Game