import React from "react";

function formatTime(time) {
  const minutes = Math.floor(time / 60000);
  const seconds = ((time % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

export const Timer = ({
  initialTime = 300000,
  name,
  onPause,
  isPaused,
  isGameStarted,
}) => {
  const [time, setTime] = React.useState(initialTime);
  const [remainingTime, setRemainingTime] = React.useState(time);
  const [isLost, setIsLost] = React.useState(false);

  React.useEffect(() => {
    if (!isPaused && isGameStarted) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1000);
        setRemainingTime((prevTime) => prevTime - 1000);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  React.useEffect(() => {
    if (remainingTime < 0) {
      setIsPaused(true);
    }
  }, [remainingTime]);

  React.useEffect(() => {
    if (remainingTime === 0) {
      setIsLost(true);
    }
  }, [remainingTime]);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "10px",
        marginLeft: "10px",
        marginRight: "10px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "black",
        borderRadius: "5px",
        backgroundColor: "white",
        display: "block",
        float: "left",
        justifyContent: "center",
        width: "300px",
      }}
    >
      <h2 style={{ fontSize: "30px", lineHeight: "0px" }}>{name}</h2>
      <h1
        style={{
          color: isLost ? "red" : "black",
          fontSize: "40px",
          lineHeight: "0px",
        }}
      >
        {isLost && isGameStarted ? "Game Over" : null}
      </h1>
      <br />
      <span
        style={{
          color: "red",
          fontWeight: "bold",
          fontSize: "80px",
        }}
      >
        {remainingTime < 0 ? 0 : formatTime(remainingTime)}
      </span>
      <br />
      {isGameStarted && (
        <button style={{ fontSize: "30px" }} onClick={onPause}>
          {isPaused ? "Resume" : "Pause"}
        </button>
      )}
    </div>
  );
};

export default Timer;
