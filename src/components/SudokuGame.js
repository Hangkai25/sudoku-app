import { useContext, useEffect } from "react";
import SudokuContext from "../context/SudokuContext";
import Board from "./Board";
import {
  generateSudoku,
  checkConflict,
  findHintCell
} from "../utils/sudoku";

export default function SudokuGame({ mode }) {
  const { state, dispatch } = useContext(SudokuContext);

  // ============================
  // Initialize Game (with LocalStorage support)
  // ============================
  useEffect(() => {
    // If already loaded same mode & board present -> do NOT regenerate
    if (state.mode === mode && state.board && state.board.length > 0) {
      return;
    }

    const g = generateSudoku(mode);
    dispatch({
      type: "INIT_GAME",
      payload: {
        mode,
        size: g.size,
        board: g.board,
        fixed: g.fixed,
        solution: g.solution,
        initialBoard: g.initialBoard
      }
    });
  }, [mode, dispatch, state.mode, state.board]);

  // ============================
  // Check if solved
  // ============================
  const checkSolved = (board, solution) => {
    for (let r = 0; r < solution.length; r++) {
      for (let c = 0; c < solution.length; c++) {
        if (board[r][c] !== solution[r][c]) return false;
      }
    }
    return true;
  };

  // ============================
  // Handle user typing a number
  // ============================
  const handleInput = (r, c, val) => {
    if (!state.board || !state.errors) return;
    if (state.locked || state.fixed[r][c]) return;

    const regex = mode === "easy" ? /^[1-6]?$/ : /^[1-9]?$/;
    if (!regex.test(val)) return;

    const newBoard = state.board.map(row => row.slice());
    newBoard[r][c] = val === "" ? 0 : Number(val);

    const newErrors = state.errors.map(row => row.slice());
    newErrors[r][c] = checkConflict(newBoard, r, c, newBoard[r][c]);

    dispatch({
      type: "UPDATE_CELL",
      payload: { board: newBoard, errors: newErrors }
    });

    if (checkSolved(newBoard, state.solution)) {
      dispatch({ type: "LOCK_GAME" });
      alert("Congratulations! You solved the puzzle.");
    }
  };

  // ============================
  // Hint button logic
  // ============================
  const handleHint = () => {
    const hint = findHintCell(state.board);

    if (!hint) {
      alert("No single-candidate cell exists at the moment.");
      dispatch({ type: "SHOW_HINT", payload: null });
      return;
    }

    dispatch({ type: "SHOW_HINT", payload: hint });
  };

  // ============================
  // New game
  // ============================
  const handleNewGame = () => {
    const g = generateSudoku(mode);
    dispatch({
      type: "INIT_GAME",
      payload: {
        mode,
        size: g.size,
        board: g.board,
        fixed: g.fixed,
        solution: g.solution,
        initialBoard: g.initialBoard
      }
    });
  };

  // ============================
  // Reset puzzle
  // ============================
  const handleReset = () => {
    dispatch({ type: "RESET_GAME" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>{mode === "easy" ? "Easy Sudoku — 6×6" : "Normal Sudoku — 9×9"}</h1>

      <p>
        Time: {Math.floor(state.seconds / 60)}:
        {String(state.seconds % 60).padStart(2, "0")}
      </p>

      <Board
        size={state.size}
        board={state.board}
        fixed={state.fixed}
        errors={state.errors}
        locked={state.locked}
        hint={state.hint}   //hint
        onInput={handleInput}
      />

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleNewGame}>New Game</button>
        <button onClick={handleReset} style={{ marginLeft: "10px" }}>
          Reset
        </button>
        <button onClick={handleHint} style={{ marginLeft: "10px" }}>
          Hint
        </button>
      </div>
    </div>
  );
}
