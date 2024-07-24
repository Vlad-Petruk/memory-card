import { useState} from "react";
import "./App.css";
import StartingScreen from "./components/startingScreen/StartingScreen";
import Game from "./components/game/Game";
import sound from './assets/sound.mp3'

const audio = new Audio(sound);
audio.volume = 0.2;

function App() {
  const [gameOn, setGameOn] = useState(false);
  const [house, setHouse] = useState(null);

    const playAudio = () => {
      audio.currentTime = 0;
      audio.play();
    };

    // playAudio();
  return (
    <>
      {gameOn ? <Game house={house}/> : <StartingScreen handleClick={() => setGameOn(true)} handleHouseClick={(selectedHouse) => setHouse(selectedHouse)} /> }
    </>
  );
}

export default App;
 