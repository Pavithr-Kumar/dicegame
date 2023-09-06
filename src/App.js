import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Game from "./Components/Game";

function App() {
  const [isPlayClick, setIsPlayClick] = useState(false);
  function playClick() {
    setIsPlayClick((prev) => !prev);
  }

  return <div>{!isPlayClick ? <Home playClick={playClick} /> : <Game />}</div>;
}

export default App;
