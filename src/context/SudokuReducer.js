export const initialSudokuState = {
  mode: null,
  size: null,
  board: [],
  fixed: [],
  errors: [],
  solution: [],
  initialBoard: [],
  seconds: 0,
  isRunning: false,
  locked: false,
  hint: null
};

export default function sudokuReducer(state, action) {
  switch (action.type) {

    // Restore from LocalStorage
    case "LOAD_SAVED_GAME": {
      const saved = action.payload || {};
      const size = saved.size || state.size || 0;

      const safeErrors =
        saved.errors && saved.errors.length
          ? saved.errors
          : Array.from({ length: size }, () => Array(size).fill(false));

      return {
        ...state,
        ...saved,
        errors: safeErrors,
      };
    }

    // New game (unique solution already guaranteed by generator)
    case "INIT_GAME": {
      const size = action.payload.size;
      return {
        ...state,
        mode: action.payload.mode,
        size,
        board: action.payload.board,
        fixed: action.payload.fixed,
        solution: action.payload.solution,
        initialBoard: action.payload.initialBoard,
        errors: Array.from({ length: size }, () =>
          Array(size).fill(false)
        ),
        seconds: 0,
        isRunning: true,
        locked: false,
        hint: null
      };
    }

    // User input change
    case "UPDATE_CELL":
      return {
        ...state,
        board: action.payload.board,
        errors: action.payload.errors,
        hint: null
      };

    // Game finished
    case "LOCK_GAME":
      return {
        ...state,
        locked: true,
        isRunning: false,
        hint: null
      };

    // Reset to original puzzle
    case "RESET_GAME":
      return {
        ...state,
        board: state.initialBoard.map(r => r.slice()),
        errors: Array.from({ length: state.size }, () =>
          Array(state.size).fill(false)
        ),
        seconds: 0,
        isRunning: true,
        locked: false,
        hint: null
      };

    // Timer tick
    case "TICK":
      return {
        ...state,
        seconds: state.isRunning ? state.seconds + 1 : state.seconds
      };

    // HINT system
    case "SHOW_HINT":
      return {
        ...state,
        hint: action.payload
      };

    default:
      return state;
  }
}
