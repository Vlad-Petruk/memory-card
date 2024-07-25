import { useState, useEffect } from "react";
import "./App.css";
import StartingScreen from "./components/startingScreen/StartingScreen";
import Game from "./components/game/Game";
import sound from './assets/sound.mp3'

const audio = new Audio(sound);
audio.volume = 0.2;

function App() {
  const [gameOn, setGameOn] = useState(false);
  const [house, setHouse] = useState(null);
  const [musicPlay, setMusicPlay] = useState(false)

  useEffect(() => {
    if (musicPlay) {
      audio.currentTime = 0;
      audio.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    } else {
      audio.pause();
    }
  }, [musicPlay]);

    
  return (
    <>
      {gameOn ? <Game house={house} musicState ={musicPlay} gameStatus={(bull)=>setGameOn(bull)} musicBtn={(bull)=>setMusicPlay(bull) }/> : <StartingScreen handleClick={() => setGameOn(true)} handleHouseClick={(selectedHouse) => setHouse(selectedHouse)} musicState ={musicPlay} musicBtn={(bull)=>setMusicPlay(bull)} /> }
    </>
  );
}

export default App;
 