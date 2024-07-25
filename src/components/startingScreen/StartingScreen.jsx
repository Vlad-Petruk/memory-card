import './StartingScreen.css'
import MusicBtn from '../MusicBtn';

function HouseCard({src, handleClick}) {
    return (
        <div className="card" onClick={handleClick}>
            <img src= {src} alt={src} />
        </div>
    )
}

function StartingScreen ({handleClick, handleHouseClick, musicState, musicBtn}) {
    const handleCombinedClick = (house) => {
        handleClick();
        handleHouseClick(house);
      };

    return (
        <div className='main-container'>
            <div className='logo-box'>
                <img src="/logo.png" alt="" />
            </div>

            <div className='housecards-box'>
                <div className='info-box'>
                    <p>You are expected to click on cards to help fighting against your Alzheimer</p>
                    <p>Select your Hogwarts house</p>
                </div>
                <div className='housecards'>
                    <HouseCard src= '/gryffindor-button.png' handleClick={() => handleCombinedClick('gryffindor')}/>
                    <HouseCard src= '/slytherin-button.png'handleClick={() => handleCombinedClick('slytherin')}/>
                    <HouseCard src= '/hufflepuff-button.png'handleClick={() => handleCombinedClick('hufflepuff')}/>
                    <HouseCard src= '/ravenclaw-button.png'handleClick={() => handleCombinedClick('ravenclaw')}/>
                </div>
            </div>
            {<MusicBtn musicState={musicState} handleClick={musicBtn}/>}
        </div>
    )
}

export default StartingScreen