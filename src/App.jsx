import { useState } from "react";
import "./App.css";
import StartingScreen from "./components/startingScreen/StartingScreen";
import Game from "./components/game/Game";

//characters in the api call can be saved with useMemo()???

function App() {
  const [gameOn, setGameOn] = useState(false);
  const [house, setHouse] = useState(null)

  return (
    <>
      {gameOn ? <Game house={house}/> : <StartingScreen handleClick={() => setGameOn(true)} handleHouseClick={(selectedHouse) => setHouse(selectedHouse)} /> }
    </>
  );
}

export default App;
 