import './StartingScreen.css'

function HouseCard({src, handleClick}) {
    return (
        <div className="card" onClick={handleClick}>
            <img src= {src} alt={src} />
        </div>
    )
}

function StartingScreen ({handleClick, handleHouseClick}) {
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
                    <p>You are expected to use your memory to help fighting against Voldemort</p>
                    <p>Select your Hogwarts house</p>
                </div>
                <div className='housecards'>
                    <HouseCard src= '/gryffindor-button.png' handleClick={() => handleCombinedClick('gryffindor')}/>
                    <HouseCard src= '/slytherin-button.png'handleClick={() => handleCombinedClick('slytherin')}/>
                    <HouseCard src= '/hufflepuff-button.png'handleClick={() => handleCombinedClick('hufflepuff')}/>
                    <HouseCard src= '/ravenclaw-button.png'handleClick={() => handleCombinedClick('ravenclaw')}/>
                </div>
            </div>
            
        </div>
    )
}

export default StartingScreen