import { Square } from "./Square";
import { useState } from "react";

export const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} handleSquare={() => handleClick(0)} />
        <Square value={squares[1]} handleSquare={() => handleClick(1)} />
        <Square value={squares[2]} handleSquare={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} handleSquare={() => handleClick(3)} />
        <Square value={squares[4]} handleSquare={() => handleClick(4)} />
        <Square value={squares[5]} handleSquare={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} handleSquare={() => handleClick(6)} />
        <Square value={squares[7]} handleSquare={() => handleClick(7)} />
        <Square value={squares[8]} handleSquare={() => handleClick(8)} />
      </div>
    </>
  );
};
