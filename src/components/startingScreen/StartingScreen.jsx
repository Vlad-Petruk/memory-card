import './StartingScreen.css'
import HouseCard from './HouseCard'

function StartingScreen () {
    

    return (
        <div className='main-container'>
            <div className='logo-box'>
                <img src="/logo.png" alt="" />
            </div>

            <div className='housecards-box'>
                <div className='info-box'>
                    <p>You are expected to use your memory to help fighting against Voldemort</p>
                    <p>Select your Hogwarts house</p>
                </div>
                <div className='housecards'>
                    <HouseCard src= '/gryffindor-button.png'/>
                    <HouseCard src= '/slytherin-button.png'/>
                    <HouseCard src= '/hufflepuff-button.png'/>
                    <HouseCard src= '/ravenclaw-button.png'/>
                </div>
            </div>
            
        </div>
    )
}

export default StartingScreen