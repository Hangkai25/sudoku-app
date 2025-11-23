import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/games">Select</Link></li>
        <li><Link to="/games/easy">Easy</Link></li>
        <li><Link to="/games/normal">Normal</Link></li>
        <li><Link to="/scores">Scores</Link></li>
        <li><Link to="/rules">Rules</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
}
