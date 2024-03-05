import { useEffect, useState } from "react";
import GameBoard from "./GameBoard";
import { calculateWinner } from "../utils/tictacCalculateWinner";

const TicTacGame = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [gameStatus, setGameStatus] = useState("Your turn");
  const winner = calculateWinner(squares);

  useEffect(() => {
    if (winner) setGameStatus(winner === "X" ? "You win" : "You lose");
  }, [winner]);

  const onSquareClick = (index) => {
    if (winner || squares[index]) return;
    const nextSquares = squares.slice();
    nextSquares[index] = "X";
    gameTurn(nextSquares);
  };

  const gameTurn = (nextSquares) => {
    if (nextSquares.findIndex((square) => !isNaN(square)) !== -1) {
      const gameSquare = Math.floor(Math.random() * 9);
      nextSquares[gameSquare]
        ? gameTurn(nextSquares)
        : (nextSquares[gameSquare] = "O");
    } else if (!winner) {
      setGameStatus("Draw");
    }
    return setSquares(nextSquares);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setGameStatus("Your turn");
  };

  return (
    <>
      <h2>
        {gameStatus}
        {gameStatus != "Your turn" && (
          <button onClick={resetGame}>Reset</button>
        )}
      </h2>
      <GameBoard squares={squares} onSquareClick={onSquareClick} />
    </>
  );
};

export default TicTacGame;
