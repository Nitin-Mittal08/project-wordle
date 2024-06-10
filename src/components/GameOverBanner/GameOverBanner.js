import React from "react";

function GameOverBanner({ gameStatus, answer, numberOfGuesses }) {
  if (gameStatus === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {numberOfGuesses > 1 ? `${numberOfGuesses} guesses` : `1 guess`}
          </strong>
          .
        </p>
      </div>
    );
  } else if (gameStatus === "lost") {
    return (
      <div class="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default GameOverBanner;
