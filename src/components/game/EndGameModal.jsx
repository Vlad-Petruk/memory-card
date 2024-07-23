import './Game.css'

function EndGameModal ({condition, house, handleClick}) {
    let message;
    let img;
    if (condition === 'win') {
        message = `Congratulations! You won the game!10 points to ${house}`;
    } else if (condition === 'loss') {
        message = "Game Over! You lost the game.";
        img = '/lose.jpg';
    }

    return (
        <>
            <div className='end-game-modal'>
                <img src={img} alt={condition} />
                <p>{message}</p>
                <button onClick={handleClick}>New Game</button>
            </div>
            <div className='dark-bg'></div>
        </>
        
    )
}

export default EndGameModal