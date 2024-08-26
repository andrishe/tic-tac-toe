import { Square } from "./Square";
import { useState } from "react";
import { calculateWinner } from "../utils/CalculateWinner";

export const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return
    }


    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  //Winner 
  const winner = calculateWinner(squares);
  let status;

  if(winner) {
    status = winner + " a gagné";
  } else {
    status = "Prochain tour: " + (xIsNext ? "X" : "O");
  }


  return (
    <>
    <div className="status">{status}</div>
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
