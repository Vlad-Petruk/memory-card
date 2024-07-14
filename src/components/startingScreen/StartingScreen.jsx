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
                    <p>You are expected to use your memory to help fighting against Voldemort </p>
                    <p>Select your Hogwarts house</p>
                </div>
                <div className='housecards'>
                    <HouseCard />
                    <HouseCard />
                    <HouseCard />
                    <HouseCard />
                </div>
            </div>
            
        </div>
    )
}

export default StartingScreen