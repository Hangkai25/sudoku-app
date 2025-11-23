import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GameSelect from "./pages/GameSelect";
import EasyGame from "./pages/EasyGame";
import NormalGame from "./pages/NormalGame";
import Rules from "./pages/Rules";
import Scores from "./pages/Scores";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GameSelect />} />
        <Route path="/games/easy" element={<EasyGame />} />
        <Route path="/games/normal" element={<NormalGame />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/scores" element={<Scores />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}


export default App;
