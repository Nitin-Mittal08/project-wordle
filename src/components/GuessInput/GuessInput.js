import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({
  guessResults,
  setGuessResults,
  gameStatus,
  setGameStatus,
  answer,
}) {
  const [guess, setGuess] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const nextGuessResult = [...guessResults, guess];
    setGuessResults(nextGuessResult);
    if (guess === answer) {
      setGameStatus("won");
    } else if (nextGuessResult.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
    setGuess("");
  };
  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
