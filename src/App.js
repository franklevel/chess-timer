import "./styles.css";
import Timer from "./components/Timer";
import React from "react";

export default function App() {
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
        initialTime={180000}
      />
      <Timer
        name="Black"
        onPause={onPause}
        isPaused={!isPaused}
        isGameStarted={isGameStarted}
        initialTime={180000}
      />
      <button
        style={{
          fontSize: "30px",
          float: "none",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        onClick={() => {
          setIsGameStarted(true);
        }}
      >
        Start Game
      </button>
    </div>
  );
}
