import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import clickSound from "./ting.mp3";
import winSound from "./win.mp3";
const TicTacToe = () => {
  const initialBoard = Array(9).fill("");
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  //sounds
  const clickAudio = new Audio(clickSound);
  const winAudio = new Audio(winSound);

  useEffect(() => {
    checkWinner();
  }, [board]);

  const handleCellClick = (index) => {
    if (board[index] === "" && !winner) {
      clickAudio.play(); // Play click sound
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const checkWinner = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        winAudio.play();
        break;
      }
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setCurrentPlayer("X");
    setWinner(null);
  };

  const renderCell = (index) => (
    <div
      className={`cell ${board[index]}`}
      key={index}
      onClick={() => handleCellClick(index)}
    >
      {board[index]}
    </div>
  );

  const renderLine = (direction, top, left) => (
    <div
      className={`line line-${direction}${winner ? " line-active" : ""}`}
      style={{ top, left }}
    ></div>
  );

  return (
    <div className="tic-tac-toe">
      <h1>Tic-Tac-Toe</h1>
      <div className="board" winner={winner}>
        {board.map((cell, index) => renderCell(index))}
        {renderLine("horizontal", "33.33%", "0")}
        {renderLine("horizontal", "66.66%", "0")}
        {renderLine("vertical", "0", "33.33%")}
        {renderLine("vertical", "0", "66.66%")}
        {renderLine("diagonal-left", "0", "0")}
        {renderLine("diagonal-right", "0", "0")}
      </div>
      {winner && (
        <div className="winner">
          <p>Player {winner} wins!</p>
          <button onClick={resetGame}>Restart</button>
        </div>
      )}
      {!winner && board.every((cell) => cell !== "") && (
        <div className="draw">
          <p>It's a draw!</p>
          <button onClick={resetGame}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
