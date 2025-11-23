import { Link } from "react-router-dom";

export default function GameSelect() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Select Game Mode</h1>
      <p>Choose a Sudoku mode to begin.</p>

      <ul style={{ lineHeight: "30px" }}>
        <li>
          <Link to="/games/easy">Easy Sudoku</Link> author: Hangkai
        </li>
        <li>
          <Link to="/games/normal">Normal Sudoku</Link> author: Hangkai
        </li>
      </ul>

      <p>You can also use the navigation bar above to switch modes.</p>
    </div>
  );
}
