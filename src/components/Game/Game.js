import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import GameOverBanner from "../GameOverBanner/GameOverBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput
        guessResults={guessResults}
        setGuessResults={setGuessResults}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        answer={answer}
      />
      {gameStatus !== "running" && (
        <GameOverBanner
          gameStatus={gameStatus}
          answer={answer}
          numberOfGuesses={guessResults.length}
        />
      )}
    </>
  );
}

export default Game;
