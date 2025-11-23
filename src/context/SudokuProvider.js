import { useReducer, useEffect } from "react";
import SudokuContext from "./SudokuContext";
import sudokuReducer, { initialSudokuState } from "./SudokuReducer";

export default function SudokuProvider({ children }) {
  const [state, dispatch] = useReducer(sudokuReducer, initialSudokuState);

  // Load saved game (run once)
  useEffect(() => {
    const saved = localStorage.getItem("sudoku-game");
    if (saved) {
      try {
        dispatch({
          type: "LOAD_SAVED_GAME",
          payload: JSON.parse(saved)
        });
      } catch (e) {
        console.error("Failed to parse saved game:", e);
      }
    }
  }, []);

  // Auto-save to localStorage every time state changes
  useEffect(() => {
    if (state.mode !== null) {
      localStorage.setItem("sudoku-game", JSON.stringify(state));
    }
  }, [state]);

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <SudokuContext.Provider value={{ state, dispatch }}>
      {children}
    </SudokuContext.Provider>
  );
}
