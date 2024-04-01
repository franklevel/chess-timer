import "./styles.css";
import Timer from "./components/Timer";
import React from "react";

export default function App() {
  const [whiteTime, setWhiteTime] = React.useState(180000);
  const [blackTime, setBlackTime] = React.useState(180000);
  const [isPaused, setIsPaused] = React.useState(true);
  const [isGameStarted, setIsGameStarted] = React.useState(false);

  const onPause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="App">
      <Timer
        name="White"
        onPause={onPause}
        isPaused={isPaused}
        isGameStarted={isGameStarted}
        initialTime={whiteTime}
      />
      <Timer
        name="Black"
        onPause={onPause}
        isPaused={!isPaused}
        isGameStarted={isGameStarted}
        initialTime={blackTime}
      />
      <button
        style={{
          fontSize: "30px",
          float: "none",
          marginTop: "20px",
          marginRight: "20px",
        }}
        onClick={() => {
          setIsGameStarted(true);
        }}
      >
        Start Game
      </button>
      <button
        style={{
          fontSize: "30px",
          float: "none",
          marginTop: "20px",
        }}
      >
        Time Settings
      </button>
    </div>
  );
}
