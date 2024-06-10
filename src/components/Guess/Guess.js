import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers.js";

function Guess({ value, answer }) {
  const validatedValue = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={`${validatedValue ? validatedValue[num].status : ""} cell`}
        >
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
