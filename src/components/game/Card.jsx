import { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';

function Card({name, img, handleClick, cardShowing}) {
    const ANIMATION_TIME = 850;
    const [interactable, setInteractable] = useState(false);
  
    useEffect(() => {
      setTimeout(() => setInteractable(true), ANIMATION_TIME);
    }, []);

    return (
        <Tilt
            tiltReverse
            className={`tilt-card ${cardShowing ? "show" : "hide"} ${
                cardShowing && interactable ? undefined : "pointer-events-none"
              }`}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            // transitionSpeed={1000}
            gyroscope={true}
        >
            <div className="person-card" onClick={handleClick}>
                <div className={`card-front `}>
                    <img src={img} alt={name}  />
                    <p>{name}</p>
                </div>
                
                <div className={`card-back `}>
                    <img src="/card-back.png" alt="" />
                </div>
            </div>
        </Tilt>
    )
}
// ${cardShowing ? "show" : "hide"}
// ${cardShowing ? "hide" : "show"}

export default Card