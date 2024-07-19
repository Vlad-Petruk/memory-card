import './Game.css'

function Game({house}) {
    return (
        <div className= {`house-card ${house}`}>
            {console.log(house)}
        </div>
    )
}

export default Game